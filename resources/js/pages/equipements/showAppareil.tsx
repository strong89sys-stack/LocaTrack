import { router } from "@inertiajs/react";

interface Appareil {
    id: number;
    imei: string;
    numero_sim: string;
    niveau_batterie: number;
    statut: string;
}

interface ShowProps {
    appareil: Appareil;
}

export default function Show({ appareil }: ShowProps) {

    const handleBack = () => {
        router.visit("/equipements");
    };

    const batterie = Math.max(
        0,
        Math.min(100, appareil.niveau_batterie)
    );

    const batterieFaible = batterie <= 20;

    const statutActif =
        appareil.statut.toLowerCase() === "actif" ||
        appareil.statut.toLowerCase() === "connecté";

    return (
        <div className="min-h-screen bg-background px-6 py-8">

            <div className="mx-auto max-w-5xl bg-transparent">

                {/* HEADER */}
                <div className="mb-6 flex items-center justify-between">

                    <div>
                        <p className="text-sm text-gray-500">
                            Gestion des appareils GPS
                        </p>

                        <h1 className="
                            mt-1
                            text-2xl
                            font-bold
                            text-foreground
                        ">
                            Détails de l'appareil
                        </h1>
                    </div>

                    <button
                        type="button"
                        onClick={handleBack}
                        className="
                            rounded-xl
                            border-0
                            bg-transparent
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-gray-400
                            shadow-sm
                            transition
                            hover:text-foreground
                            hover:shadow
                        "
                    >
                        ← Retour
                    </button>

                </div>


                {/* CARTE PRINCIPALE */}
                <div className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-background
                    shadow-sm
                ">

                    {/* BANDEAU */}
                    <div className="
                        bg-[#00647c]
                        px-8
                        py-7
                    ">

                        <div className="
                            flex
                            flex-col
                            gap-5
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        ">

                            <div className="flex items-center gap-4">

                                {/* ICÔNE GPS */}
                                <div className="
                                    flex
                                    h-16
                                    w-16
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-white/15
                                    text-3xl
                                ">
                                    📡
                                </div>

                                <div>

                                    <p className="
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-widest
                                        text-white/60
                                    ">
                                        Appareil GPS
                                    </p>

                                    <h2 className="
                                        mt-1
                                        text-2xl
                                        font-bold
                                        text-white
                                        break-all
                                    ">
                                        {appareil.imei}
                                    </h2>

                                </div>

                            </div>


                            {/* STATUT */}
                            <span
                                className={`
                                    inline-flex
                                    w-fit
                                    items-center
                                    gap-2
                                    rounded-full
                                    px-4
                                    py-2
                                    text-sm
                                    font-semibold
                                    ${
                                        statutActif
                                            ? "bg-green-400/20 text-green-100"
                                            : "bg-white/15 text-white"
                                    }
                                `}
                            >

                                <span
                                    className={`
                                        h-2.5
                                        w-2.5
                                        rounded-full
                                        ${
                                            statutActif
                                                ? "bg-green-400"
                                                : "bg-gray-300"
                                        }
                                    `}
                                />

                                {appareil.statut}

                            </span>

                        </div>

                    </div>


                    {/* CONTENU */}
                    <div className="p-8">

                        {/* IDENTIFICATION */}
                        <div>

                            <h3 className="
                                mb-4
                                text-xs
                                font-bold
                                uppercase
                                tracking-widest
                                text-gray-400
                            ">
                                Identification
                            </h3>


                            <div className="
                                grid
                                grid-cols-1
                                gap-4
                                md:grid-cols-2
                            ">

                                {/* ID */}
                                <div className="
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-background
                                    p-5
                                ">

                                    <div className="
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                    ">

                                        <span className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-sm
                                            shadow-sm
                                            text-black
                                        ">
                                            #
                                        </span>

                                        <span className="
                                            text-xs
                                            font-medium
                                            text-gray-400
                                        ">
                                            Identifiant
                                        </span>

                                    </div>

                                    <p className="
                                        text-xl
                                        font-bold
                                        text-foreground
                                    ">
                                        #{appareil.id}
                                    </p>

                                </div>


                                {/* IMEI */}
                                <div className="
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-background
                                    p-5
                                ">

                                    <div className="
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                    ">

                                        <span className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-sm
                                            shadow-sm
                                        ">
                                            📱
                                        </span>

                                        <span className="
                                            text-xs
                                            font-medium
                                            text-gray-400
                                        ">
                                            Numéro IMEI
                                        </span>

                                    </div>

                                    <p className="
                                        break-all
                                        text-lg
                                        font-bold
                                        tracking-wide
                                        text-foreground
                                    ">
                                        {appareil.imei}
                                    </p>

                                </div>


                                {/* SIM */}
                                <div className="
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-background
                                    p-5
                                ">

                                    <div className="
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                    ">

                                        <span className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-sm
                                            shadow-sm
                                        ">
                                            💳
                                        </span>

                                        <span className="
                                            text-xs
                                            font-medium
                                            text-gray-400
                                        ">
                                            Carte SIM
                                        </span>

                                    </div>

                                    <p className="
                                        text-lg
                                        font-bold
                                        text-foreground
                                    ">
                                        {appareil.numero_sim}
                                    </p>

                                </div>


                                {/* STATUT */}
                                <div className="
                                    rounded-2xl
                                    border
                                    border-border
                                    bg-background
                                    p-5
                                ">

                                    <div className="
                                        mb-2
                                        flex
                                        items-center
                                        gap-2
                                    ">

                                        <span className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-white
                                            text-sm
                                            shadow-sm
                                            text-black
                                        ">
                                            ●
                                        </span>

                                        <span className="
                                            text-xs
                                            font-medium
                                            text-gray-400
                                        ">
                                            Statut
                                        </span>

                                    </div>

                                    <div className="
                                        flex
                                        items-center
                                        gap-2
                                    ">

                                        <span
                                            className={`
                                                h-2.5
                                                w-2.5
                                                rounded-full
                                                ${
                                                    statutActif
                                                        ? "bg-green-500"
                                                        : "bg-gray-400"
                                                }
                                            `}
                                        />

                                        <p className="
                                            text-lg
                                            font-bold
                                            text-foreground
                                        ">
                                            {appareil.statut}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* SÉPARATION */}
                        <div className="
                            my-8
                            h-px
                            bg-border
                        " />


                        {/* BATTERIE */}
                        <div>

                            <div className="
                                mb-4
                                flex
                                items-center
                                justify-between
                            ">

                                <div>

                                    <h3 className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-widest
                                        text-gray-400
                                    ">
                                        Batterie
                                    </h3>

                                    <p className="
                                        mt-1
                                        text-sm
                                        text-gray-500
                                    ">
                                        Niveau de charge actuel
                                    </p>

                                </div>

                                <span className={`
                                    text-2xl
                                    font-bold
                                    ${
                                        batterieFaible
                                            ? "text-red-500"
                                            : "text-foreground"
                                    }
                                `}>
                                    {batterie}%
                                </span>

                            </div>


                            {/* BARRE */}
                            <div className="
                                h-4
                                w-full
                                overflow-hidden
                                rounded-full
                                bg-border
                            ">

                                <div
                                    className={`
                                        h-full
                                        rounded-full
                                        transition-all
                                        duration-700
                                        ${
                                            batterie <= 20
                                                ? "bg-red-500"
                                                : batterie <= 50
                                                ? "bg-yellow-500"
                                                : "bg-green-500"
                                        }
                                    `}
                                    style={{
                                        width: `${batterie}%`
                                    }}
                                />

                            </div>


                            <div className="
                                mt-3
                                flex
                                justify-between
                                text-xs
                                text-gray-400
                            ">

                                <span>
                                    Niveau faible
                                </span>

                                <span>
                                    Niveau optimal
                                </span>

                            </div>

                        </div>


                        {/* FOOTER */}
                        <div className="
                            mt-8
                            flex
                            flex-col
                            gap-4
                            border-t
                            border-border
                            pt-6
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        ">

                            <div>

                                <p className="
                                    text-xs
                                    text-gray-400
                                ">
                                    Identifiant de l'appareil
                                </p>

                                <p className="
                                    mt-1
                                    text-sm
                                    font-semibold
                                    text-gray-700
                                ">
                                    #{appareil.id}
                                </p>

                            </div>


                            <button
                                type="button"
                                onClick={handleBack}
                                className="
                                    rounded-xl
                                    bg-[#00647c]
                                    px-5
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-[#00566a]
                                    hover:shadow-md
                                "
                            >
                                Retour aux appareils
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}