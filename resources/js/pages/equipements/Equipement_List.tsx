import { router } from "@inertiajs/react";

interface Position {
    latitude: number;
    longitude: number;
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

interface IndexProps {
    equipements: Equipement[];
}

export default function EquipementList({
    equipements,
}: IndexProps) {

    const handleClick = (id: number) => {
        router.visit(`/equipements/${id}`);
    };

    return (
        <div className="max-w-[1600px] mx-auto px-6 py-8">

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
            ">

                {equipements.map((equipement) => {

                    const isOnline = equipement.position !== null;

                    const battery =
                        equipement.appareil?.niveau_batterie ?? 0;

                    return (
                        <button
                            key={equipement.id}
                            onClick={() =>
                                handleClick(equipement.id)
                            }
                            className="
                                group
                                w-full
                                overflow-hidden
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                text-left
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-xl
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#00647c]/30
                            "
                        >

                            {/* IMAGE */}

                            <div className="
                                relative
                                h-52
                                overflow-hidden
                                bg-gray-100
                            ">

                                <img
                                    src={`/storage/${equipement.image}`}
                                    alt={equipement.reference}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-500
                                        group-hover:scale-105
                                    "
                                />

                                {/* Overlay */}

                                <div className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/60
                                    via-black/10
                                    to-transparent
                                " />

                                {/* STATUT */}

                                <div className="
                                    absolute
                                    right-4
                                    top-4
                                ">

                                    <span
                                        className={`
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            px-3
                                            py-1.5
                                            text-xs
                                            font-semibold
                                            text-white
                                            backdrop-blur-md
                                            ${
                                                equipement.statut.libelle ===
                                                "Disponible"
                                                    ? "bg-green-500/90"
                                                    : "bg-red-500/90"
                                            }
                                        `}
                                    >

                                        <span className="
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            bg-white
                                        " />

                                        {equipement.statut.libelle}

                                    </span>

                                </div>

                                {/* REFERENCE */}

                                <div className="
                                    absolute
                                    bottom-4
                                    left-4
                                    right-4
                                ">

                                    <p className="
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-wider
                                        text-white/70
                                    ">
                                        Équipement
                                    </p>

                                    <h2 className="
                                        mt-1
                                        text-xl
                                        font-bold
                                        text-white
                                    ">
                                        {equipement.reference}
                                    </h2>

                                </div>

                            </div>


                            {/* CONTENU */}

                            <div className="p-5">

                                {/* MARQUE / MODELE */}

                                <div className="mb-5">

                                    <p className="
                                        text-base
                                        font-semibold
                                        text-gray-900
                                    ">
                                        {equipement.marque}
                                    </p>

                                    <p className="
                                        text-sm
                                        text-gray-500
                                    ">
                                        {equipement.modele}
                                    </p>

                                </div>


                                {/* INFOS */}

                                <div className="
                                    grid
                                    grid-cols-2
                                    gap-3
                                ">

                                    {/* GPS */}

                                    <div className="
                                        rounded-xl
                                        bg-gray-50
                                        p-3
                                    ">

                                        <div className="
                                            mb-1
                                            flex
                                            items-center
                                            gap-2
                                        ">

                                            <span
                                                className={`
                                                    h-2
                                                    w-2
                                                    rounded-full
                                                    ${
                                                        isOnline
                                                            ? "bg-green-500"
                                                            : "bg-gray-400"
                                                    }
                                                `}
                                            />

                                            <span className="
                                                text-xs
                                                font-medium
                                                text-gray-500
                                            ">
                                                GPS
                                            </span>

                                        </div>

                                        <p className="
                                            text-sm
                                            font-semibold
                                            text-gray-900
                                        ">
                                            {isOnline
                                                ? "Connecté"
                                                : "Aucune donnée"
                                            }
                                        </p>

                                    </div>


                                    {/* VITESSE */}

                                    <div className="
                                        rounded-xl
                                        bg-gray-50
                                        p-3
                                    ">

                                        <span className="
                                            text-xs
                                            font-medium
                                            text-gray-500
                                        ">
                                            Vitesse
                                        </span>

                                        <p className="
                                            mt-1
                                            text-sm
                                            font-semibold
                                            text-gray-900
                                        ">
                                            {equipement.position
                                                ? `${equipement.position.vitesse} km/h`
                                                : "—"
                                            }
                                        </p>

                                    </div>


                                    {/* BATTERIE */}

                                    <div className="
                                        col-span-2
                                        rounded-xl
                                        bg-gray-50
                                        p-3
                                    ">

                                        <div className="
                                            mb-2
                                            flex
                                            items-center
                                            justify-between
                                        ">

                                            <span className="
                                                text-xs
                                                font-medium
                                                text-gray-500
                                            ">
                                                Batterie
                                            </span>

                                            <span className="
                                                text-xs
                                                font-bold
                                                text-gray-900
                                            ">
                                                {battery}%
                                            </span>

                                        </div>

                                        <div className="
                                            h-2
                                            w-full
                                            overflow-hidden
                                            rounded-full
                                            bg-gray-200
                                        ">

                                            <div
                                                className={`
                                                    h-full
                                                    rounded-full
                                                    transition-all
                                                    ${
                                                        battery <= 20
                                                            ? "bg-red-500"
                                                            : battery <= 50
                                                            ? "bg-yellow-500"
                                                            : "bg-green-500"
                                                    }
                                                `}
                                                style={{
                                                    width: `${Math.min(
                                                        Math.max(battery, 0),
                                                        100
                                                    )}%`,
                                                }}
                                            />

                                        </div>

                                    </div>

                                </div>


                                {/* FOOTER */}

                                <div className="
                                    mt-5
                                    flex
                                    items-center
                                    justify-between
                                    border-t
                                    border-gray-100
                                    pt-4
                                ">

                                    <span className="
                                        text-xs
                                        text-gray-400
                                    ">
                                        ID #{equipement.id}
                                    </span>

                                    <span className="
                                        text-sm
                                        font-semibold
                                        text-[#00647c]
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    ">
                                        Voir détails →
                                    </span>

                                </div>

                            </div>

                        </button>
                    );
                })}

            </div>

        </div>
    );
}