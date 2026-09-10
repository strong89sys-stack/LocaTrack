import L from "leaflet";
import { useEffect, useState } from "react";
import { MdOutlineFilterList } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { usePositionUpdates, type PositionUpdate } from "@/hooks/use-position-updates";
import { useCurrentTime } from "@/hooks/useCurrentTime";

interface MapControllerProps {
    position: [number, number] | null;
}

function MapController({ position }: MapControllerProps) {
    const map = useMap();

    useEffect(() => {
        if (!position) {
            return;
        }

        map.flyTo(position, 16, {
            duration: 1,
        });
    }, [position, map]);

    return null;
}

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

interface MapProps {
    equipements: Equipement[];
    selectedPosition: [number, number] | null;
}

export default function MapCard({ equipements, selectedPosition }: MapProps) {
    const [equipementsState, setEquipementsState] = useState<Equipement[]>(equipements);

    useEffect(() => {
        setEquipementsState(equipements);
    }, [equipements]);

    usePositionUpdates((positionUpdate: PositionUpdate) => {
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
                        adresse: positionUpdate.adresse,
                        vitesse: positionUpdate.vitesse,
                        date_heure: positionUpdate.date_heure,
                    },
                };
            })
        );
    });

    const now = useCurrentTime();

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

    const createMarkerIcon = (reference: string, offline: boolean) => {
        const color = offline ? "#ef4444" : "#00647c";

        return L.divIcon({
            className: "",
            html: `
                <div style="position:relative;display:flex;flex-direction:column;align-items:center;width:max-content;transform:translateX(-50%);">
                    <div style="margin-bottom:4px;padding:3px 7px;background:white;border:1px solid #d1d5db;border-radius:5px;color:#121c28;font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.15);">
                        ${reference}
                    </div>

                    <div style="position:relative;width:20px;height:20px;display:flex;align-items:center;justify-content:center;">
                        <div style="position:absolute;width:20px;height:20px;border-radius:50%;background:${color};opacity:0.20;animation:markerPulse 1.8s infinite;"></div>

                        <div style="position:relative;width:9px;height:9px;border-radius:50%;background:${color};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.35);"></div>
                    </div>
                </div>
            `,
            iconSize: [0, 0],
            iconAnchor: [0, 0],
            popupAnchor: [0, -28],
        });
    };

    return (
        <section className="order-1 relative flex h-[55vh] min-h-100 w-full flex-col overflow-hidden bg-background lg:order-0 lg:col-span-9 lg:h-screen">
            {/* <div className="relative z-10 flex shrink-0 items-center gap-2 overflow-x-auto border-b border-gray-200 bg-background/95 p-3 shadow-sm backdrop-blur-md sm:p-4">
                <button type="button" className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#121c28] shadow-sm transition hover:border-[#00647c]/30 hover:text-[#00647c] sm:px-4">
                    <MdOutlineFilterList className="text-lg text-[#00647c]" />
                    Filtrer
                </button>

                <div className="flex shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-background shadow-sm">
                    <button type="button" className="border-r border-gray-200 bg-background px-3 py-2 text-sm font-semibold text-foreground sm:px-4">
                        Tout
                    </button>

                    <button type="button" className="border-r border-gray-200 px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-gray-50 sm:px-4">
                        Actifs
                    </button>

                    <button type="button" className="px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 sm:px-4">
                        Alertes
                    </button>
                </div>
            </div> */}

            <div className="relative z-0 min-h-0 flex-1">
                <MapContainer center={[5.3364, -4.0267]} zoom={12} className="h-full w-full">
                    <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <MapController position={selectedPosition} />

                    {equipementsState.map((equipement) => {
                        if (!equipement.position) {
                            return null;
                        }

                        return (
                            <Marker
                                key={equipement.id}
                                position={[equipement.position.latitude, equipement.position.longitude]}
                                icon={createMarkerIcon(equipement.reference, isOffline(equipement))}
                            >
                                <Popup>
                                    <div className="min-w-45">
                                        <p className="font-bold text-[#121c28]">
                                            {equipement.reference}
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {equipement.marque} - {equipement.modele}
                                        </p>

                                        <div className="mt-3 space-y-1 text-sm">
                                            <p>
                                                <strong>Batterie :</strong>{" "}
                                                {equipement.appareil?.niveau_batterie ?? 0}%
                                            </p>

                                            <p>
                                                <strong>Vitesse :</strong>{" "}
                                                {equipement.position.vitesse} km/h
                                            </p>

                                            <p>
                                                <strong>Adresse :</strong>{" "}
                                                {equipement.position.adresse ?? "Inconnue"}
                                            </p>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </div>
        </section>
    );
}