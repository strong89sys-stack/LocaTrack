import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePositionUpdates } from "@/hooks/use-position-updates";
import { useCurrentTime } from "@/hooks/useCurrentTime";

interface Position {
    latitude: number;
    longitude: number;
    adresse: string | null;
    vitesse: number;
    date_heure: string;
}

interface Appareil {
    id: number;
    imei: string;
    numero_sim: string;
    niveau_batterie: number;
    statut: string;
}

interface Statut {
    id: number;
    libelle: string;
}

interface Equipement {
    id: number;
    reference: string;
    marque: string;
    modele: string;
    statut_id: number;
    statut: Statut;
    image: string;
    appareil: Appareil | null;
    position: Position | null;
}

interface AsideProps {
    equipements: Equipement[];
    onSelect: (position: [number, number]) => void;
}

export default function Aside({ equipements, onSelect }: AsideProps) {
    const now = useCurrentTime();

    const [equipementsState, setEquipementsState] = useState<Equipement[]>(equipements);

    useEffect(() => {
        setEquipementsState(equipements);
    }, [equipements]);

    usePositionUpdates((positionUpdate) => {
        setEquipementsState((currentEquipements) =>
            currentEquipements.map((equipement) => {
                if (equipement.appareil?.id !== positionUpdate.appareil_id) {
                    return equipement;
                }

                return {
                    ...equipement,
                    position: {
                        latitude: positionUpdate.latitude,
                        longitude: positionUpdate.longitude,
                        adresse: positionUpdate.adresse ?? equipement.position?.adresse ?? null,
                        vitesse: positionUpdate.vitesse,
                        date_heure: positionUpdate.date_heure,
                    },
                };
            })
        );
    });

    const isOffline = (item: Equipement) => {
        if (!item.position?.date_heure) {
            return true;
        }

        if (now === null) {
            return false;
        }

        const lastPosition = new Date(item.position.date_heure).getTime();
        const elapsedTime = 5 * 60 * 1000;

        return now - lastPosition > elapsedTime;
    };

    return (
        <aside className="order-2 flex h-[45vh] min-h-0 w-full flex-col border-t border-gray-200 bg-[#f8f9ff] lg:order-0 lg:col-span-3 lg:h-screen lg:w-auto lg:border-t-0 lg:border-l">
            <div className="flex shrink-0 items-center justify-between border-b border-b-border shadow border-gray-200 bg-background px-5 py-4 sm:px-6 lg:py-5">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Suivi en temps réel</p>
                    <h2 className="mt-1 text-xl font-bold text-foreground">État du parc</h2>
                </div>

                <div className="relative flex h-3 w-3">
                    <motion.span animate={{ opacity: [0, 0.4, 0], scale: [0, 1.9, 1] }} transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }} className="absolute h-full w-full rounded-full bg-[#00647c]" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00647c]" />
                </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4 bg-background">
                <div className="space-y-3 sm:space-y-4">
                    {equipementsState.map((item) => {
                        const offline = isOffline(item);

                        return (
                            <button
                                type="button"
                                key={item.id}
                                onClick={() => {
                                    if (!item.position) {
                                        return;
                                    }

                                    onSelect([item.position.latitude, item.position.longitude]);
                                }}
                                className={`w-full rounded-2xl border-2 border-border border-l-[5px] bg-background/40 p-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${offline ? "border-l-red-500" : "border-l-[#00647c]"}`}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <p className="truncate text-xs font-semibold uppercase tracking-wider text-gray-400">{item.marque}</p>

                                        <h3 className={`mt-1 truncate text-lg font-bold sm:text-xl ${offline ? "text-red-500" : "text-[#00647c]"}`}>
                                            {item.modele}
                                        </h3>

                                        <p className="mt-1 truncate text-xs text-gray-400">
                                            Réf. {item.reference}
                                        </p>
                                    </div>

                                    <div className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold bg-background ${offline ? "text-red-500" : "text-[#00647c]"}`}>
                                        <span className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${offline ? "bg-red-500" : "bg-[#00647c]"}`} />
                                        {offline ? "Inactif" : "Actif"}
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-2 border-t-2 border-border pt-3">
                                    <div className="rounded-xl bg-background p-3">
                                        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Vitesse</p>
                                        <p className="mt-1 text-sm font-bold text-foreground">
                                            {item.position?.vitesse ?? 0} km/h
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-background p-3">
                                        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Batterie</p>
                                        <p className="mt-1 text-sm font-bold text-foreground">
                                            {item.appareil?.niveau_batterie ?? 0}%
                                        </p>
                                    </div>

                                    <div className="col-span-2 rounded-xl bg-background p-3">
                                        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Position actuelle</p>
                                        <p className="mt-1 truncate text-sm font-semibold text-foreground">
                                            {item.position?.adresse ?? "Adresse inconnue"}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}