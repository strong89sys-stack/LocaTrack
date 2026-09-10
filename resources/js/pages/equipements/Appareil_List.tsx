import { router } from "@inertiajs/react";
import GPS from "/resources/js/assets/appareils/GPS.png";

interface Appareil {
    id: number;
    imei: string;
    numero_sim: string;
    niveau_batterie: number;
    statut: string;
}

interface IndexProps {
    appareils: Appareil[];
}

export default function Appareil_List({
    appareils,
}: IndexProps) {

    const handleClick = (id: number) => {
        router.visit(`/appareils/${id}`);
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

                {appareils.map((appareil) => {

                    const battery = Math.min(
                        Math.max(appareil.niveau_batterie, 0),
                        100
                    );

                    const isActive =
                        appareil.statut.toLowerCase() === "actif";

                    return (
                        <button
                            key={appareil.id}
                            onClick={() =>
                                handleClick(appareil.id)
                            }
                            className="
                                group
                                w-full
                                overflow-hidden
                                rounded-2xl
                                border
                                border-border
                                bg-background
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
                                    src={GPS}
                                    alt="Appareil GPS"
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
                                    bg-linear-to-t
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
                                                isActive
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

                                        {appareil.statut}

                                    </span>

                                </div>


                                {/* TITRE */}

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
                                        text-foreground/70
                                    ">
                                        Appareil GPS
                                    </p>

                                    <h2 className="
                                        mt-1
                                        text-lg
                                        font-bold
                                        text-white
                                        truncate
                                    ">
                                        IMEI {appareil.imei}
                                    </h2>

                                </div>

                            </div>


                            {/* CONTENU */}

                            <div className="p-5">


                                {/* INFORMATIONS */}

                                <div className="
                                    grid
                                    grid-cols-2
                                    gap-3
                                ">


                                    {/* IMEI */}

                                    <div className="
                                        col-span-2
                                        rounded-xl
                                        bg-background
                                        p-3
                                    ">

                                        <span className="
                                            text-xs
                                            font-medium
                                            text-gray-500
                                        ">
                                            IMEI
                                        </span>

                                        <p className="
                                            mt-1
                                            text-sm
                                            font-semibold
                                            tracking-wide
                                            text-foreground
                                        ">
                                            {appareil.imei}
                                        </p>

                                    </div>


                                    {/* SIM */}

                                    <div className="
                                        rounded-xl
                                        bg-background
                                        p-3
                                    ">

                                        <span className="
                                            text-xs
                                            font-medium
                                            text-gray-500
                                        ">
                                            Numéro SIM
                                        </span>

                                        <p className="
                                            mt-1
                                            text-sm
                                            font-semibold
                                            text-foreground
                                        ">
                                            {appareil.numero_sim}
                                        </p>

                                    </div>


                                    {/* STATUT */}

                                    <div className="
                                        rounded-xl
                                        bg-background
                                        p-3
                                    ">

                                        <span className="
                                            text-xs
                                            font-medium
                                            text-gray-500
                                        ">
                                            Statut
                                        </span>

                                        <div className="
                                            mt-1
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
                                                        isActive
                                                            ? "bg-green-500"
                                                            : "bg-red-500"
                                                    }
                                                `}
                                            />

                                            <span className="
                                                text-sm
                                                font-semibold
                                                text-foreground
                                            ">
                                                {appareil.statut}
                                            </span>

                                        </div>

                                    </div>


                                    {/* BATTERIE */}

                                    <div className="
                                        col-span-2
                                        rounded-xl
                                        bg-background
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
                                                Niveau de batterie
                                            </span>

                                            <span className="
                                                text-xs
                                                font-bold
                                                text-foreground
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
                                                    width: `${battery}%`,
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
                                    border-border
                                    pt-4
                                ">

                                    <span className="
                                        text-xs
                                        text-gray-400
                                    ">
                                        ID #{appareil.id}
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