import { useState } from "react";
import { FiMoreVertical, FiMapPin } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";

import type { Location } from "../Location";

import RentalInfoRow from "./RentalInfoRow";
import RentalProgress from "./RentalProgress";
import RentalStatusBadge from "./RentalStatusBadge";

interface RentalCardProps {
    location: Location;
}

export default function RentalCard({
    location,
}: RentalCardProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const isOverdue = location.statut === "expiré";

    /*
    |--------------------------------------------------------------------------
    | Dates
    |--------------------------------------------------------------------------
    */

    const startDate = new Date(location.date_debut);
    const endDate = new Date(location.date_fin);
    const today = new Date();

    /*
    |--------------------------------------------------------------------------
    | Durée totale
    |--------------------------------------------------------------------------
    */

    const totalDuration =
        endDate.getTime() - startDate.getTime();

    /*
    |--------------------------------------------------------------------------
    | Temps écoulé
    |--------------------------------------------------------------------------
    */

    const elapsedDuration =
        today.getTime() - startDate.getTime();

    /*
    |--------------------------------------------------------------------------
    | Progression
    |--------------------------------------------------------------------------
    */

    let progress = 0;

    if (totalDuration > 0) {
        progress =
            (elapsedDuration / totalDuration) * 100;
    }

    progress = Math.min(
        Math.max(progress, 0),
        100
    );

    /*
    |--------------------------------------------------------------------------
    | Durée en jours
    |--------------------------------------------------------------------------
    */

    const duration = Math.max(
        Math.ceil(
            totalDuration /
                (1000 * 60 * 60 * 24)
        ),
        0
    );

    /*
    |--------------------------------------------------------------------------
    | Formatage des dates
    |--------------------------------------------------------------------------
    */

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString(
            "fr-FR",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Informations
    |--------------------------------------------------------------------------
    */

    const clientName =
        `${location.client.nom} ${location.client.prenoms}`;

    const equipmentName =
        `${location.equipement.marque} ${location.equipement.modele}`;

    /*
    |--------------------------------------------------------------------------
    | Expirer la location
    |--------------------------------------------------------------------------
    */

    const handleExpire = () => {
        setMenuOpen(false);

        if (location.statut === "expiré") {
            return;
        }

        router.put(
            `/locations/${location.id}/expire`,
            {},
            {
                preserveScroll: true,
            }
        );
    };

    return (
        <div
            className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >
            {/* IMAGE */}

            <div
                className="
                    relative
                    h-42.5
                    overflow-hidden
                    bg-gray-100
                "
            >
                <img
                    src={location.equipement.image}
                    alt={equipmentName}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                <div className="absolute left-4 top-4">
                    <RentalStatusBadge
                        status={location.statut}
                    />
                </div>
            </div>

            {/* CONTENU */}

            <div className="p-5">

                {/* TITRE */}

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-3
                    "
                >
                    <div className="min-w-0">

                        <h3
                            className="
                                truncate
                                text-lg
                                font-bold
                                text-[#172033]
                            "
                            title={equipmentName}
                        >
                            {equipmentName}
                        </h3>

                        <p
                            className="
                                mt-1
                                truncate
                                text-sm
                                text-gray-500
                            "
                            title={location.equipement.reference}
                        >
                            Réf. {location.equipement.reference}
                        </p>

                    </div>

                    {/* MENU */}

                    <div className="relative shrink-0">

                        <button
                            type="button"
                            onClick={() =>
                                setMenuOpen(!menuOpen)
                            }
                            className="
                                rounded-full
                                p-2
                                text-gray-400
                                transition
                                hover:bg-gray-100
                                hover:text-gray-800
                            "
                        >
                            <FiMoreVertical size={20} />
                        </button>

                        {menuOpen && (
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-10
                                    z-50
                                    w-48
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-white
                                    py-1
                                    shadow-lg
                                "
                            >

                                {!isOverdue && (
                                    <button
                                        type="button"
                                        onClick={handleExpire}
                                        className="
                                            w-full
                                            px-4
                                            py-2.5
                                            text-left
                                            text-sm
                                            font-medium
                                            text-red-600
                                            transition
                                            hover:bg-red-50
                                        "
                                    >
                                        Marquer comme expirée
                                    </button>
                                )}

                                {isOverdue && (
                                    <div
                                        className="
                                            px-4
                                            py-2.5
                                            text-sm
                                            text-gray-400
                                        "
                                    >
                                        Location déjà expirée
                                    </div>
                                )}

                            </div>
                        )}

                    </div>
                </div>

                {/* INFORMATIONS */}

                <div
                    className="
                        mt-5
                        space-y-3
                    "
                >

                    {/* Client */}

                    <RentalInfoRow
                        icon={<IoMdPerson />}
                        text={clientName}
                    />

                    {/* Dates */}

                    <RentalInfoRow
                        icon={
                            <MdOutlineCalendarMonth />
                        }
                        text={
                            isOverdue
                                ? `Terminée le ${formatDate(
                                      location.date_fin
                                  )}`
                                : `${formatDate(
                                      location.date_debut
                                  )} → ${formatDate(
                                      location.date_fin
                                  )} • ${duration} jours`
                        }
                        danger={isOverdue}
                    />

                    {/* Zone */}

                    <RentalInfoRow
                        icon={<FiMapPin />}
                        text={
                            location.zone_geofence.nom
                        }
                    />

                </div>

                {/* PROGRESSION */}

                <div className="mt-5">

                    <RentalProgress
                        progress={progress}
                        overdue={isOverdue}
                    />

                </div>

            </div>
        </div>
    );
}
