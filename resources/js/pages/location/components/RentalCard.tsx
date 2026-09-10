import { useState } from "react";
import { router } from "@inertiajs/react";
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

export default function RentalCard({ location }: RentalCardProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showExtend, setShowExtend] = useState(false);
    const [newEndDate, setNewEndDate] = useState("");
    const [processing, setProcessing] = useState(false);

    const isOverdue = location.statut === "expiré";

    const startDate = new Date(location.date_debut);
    const endDate = new Date(location.date_fin);
    const today = new Date();

    const totalDuration =
        endDate.getTime() - startDate.getTime();

    const elapsedDuration =
        today.getTime() - startDate.getTime();

    let progress = 0;

    if (totalDuration > 0) {
        progress =
            (elapsedDuration / totalDuration) * 100;
    }

    progress = Math.min(
        Math.max(progress, 0),
        100
    );

    const duration = Math.max(
        Math.ceil(
            totalDuration /
                (1000 * 60 * 60 * 24)
        ),
        0
    );

    const formatDate = (date: string) => {
        const parsedDate = new Date(date);

        if (isNaN(parsedDate.getTime())) {
            return "Date invalide";
        }

        return parsedDate.toLocaleDateString(
            "fr-FR",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };

    const clientName =
        `${location.client.nom} ${location.client.prenoms}`;

    const equipmentName =
        `${location.equipement.marque} ${location.equipement.modele}`;

    const imageUrl = location.equipement.image
        ? location.equipement.image.startsWith("/storage/")
            ? location.equipement.image
            : `/storage/${location.equipement.image}`
        : "/images/equipement-placeholder.jpg";

    const handleExpire = () => {
        setMenuOpen(false);

        if (isOverdue) {
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

    const handleShowExtend = () => {
        setMenuOpen(false);
        setShowExtend(true);
        setNewEndDate("");
    };

    const handleExtend = () => {
        if (!newEndDate || processing) {
            return;
        }

        if (
            newEndDate <=
            location.date_fin.substring(0, 10)
        ) {
            return;
        }

        setProcessing(true);

        router.put(
            `/locations/${location.id}/prolonger`,
            {
                date_fin: newEndDate,
            },
            {
                preserveScroll: true,

                onFinish: () => {
                    setProcessing(false);
                },

                onSuccess: () => {
                    setShowExtend(false);
                    setNewEndDate("");
                },
            }
        );
    };

    const minimumEndDate =
        location.date_fin.substring(0, 10);

    return (
        <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* IMAGE */}

            <div className="relative h-42.5 overflow-hidden bg-gray-100 backdrop-blur-3xl">

                <img
                    src={imageUrl}
                    alt={equipmentName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

                <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                        <h3
                            className="truncate text-lg font-bold text-foreground"
                            title={equipmentName}
                        >
                            {equipmentName}
                        </h3>

                        <p
                            className="mt-1 truncate text-sm text-gray-500"
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
                                setMenuOpen((value) => !value)
                            }
                            className="rounded-full p-2 text-gray-400 transition hover:text-gray-800 cursor-pointer"
                        >
                            <FiMoreVertical size={20} />
                        </button>


                        {menuOpen && (
                            <div className="absolute right-0 top-10 z-50 w-52 overflow-hidden rounded-xl border border-border bg-background py-1 shadow-lg">

                                {!isOverdue && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={handleShowExtend}
                                            className="w-full px-4 py-2.5 text-left text-sm font-medium text-[#00647c] transition hover:bg-border"
                                        >
                                            Prolonger la location
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleExpire}
                                            className="w-full px-4 py-2.5 text-left text-sm font-medium text-red-600 transition hover:bg-border"
                                        >
                                            Marquer comme terminée
                                        </button>
                                    </>
                                )}

                                {isOverdue && (
                                    <div className="px-4 py-2.5 text-sm text-gray-400">
                                        Location déjà terminée
                                    </div>
                                )}

                            </div>
                        )}

                    </div>

                </div>


                {/* FORMULAIRE PROLONGATION */}

                {showExtend && !isOverdue && (
                    <div className="mt-5 rounded-2xl border border-border bg-background p-4">

                        <p className="text-sm font-bold text-foreground">
                            Prolonger la location
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-gray-500">
                            La nouvelle date doit être postérieure à la date de fin actuelle.
                        </p>

                        <div className="mt-4">

                            <label
                                htmlFor={`date-fin-${location.id}`}
                                className="mb-2 block text-xs font-semibold text-gray-600"
                            >
                                Nouvelle date de fin
                            </label>

                            <input
                                id={`date-fin-${location.id}`}
                                type="date"
                                value={newEndDate}
                                min={minimumEndDate}
                                onChange={(event) =>
                                    setNewEndDate(
                                        event.target.value
                                    )
                                }
                                className="w-full rounded-xl border border-gray-200 bg-background px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-[#00647c] focus:ring-2 focus:ring-[#00647c]/10"
                            />

                        </div>


                        <div className="mt-4 flex items-center justify-end gap-2">

                            <button
                                type="button"
                                onClick={() => {
                                    setShowExtend(false);
                                    setNewEndDate("");
                                }}
                                disabled={processing}
                                className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Annuler
                            </button>

                            <button
                                type="button"
                                onClick={handleExtend}
                                disabled={
                                    !newEndDate ||
                                    processing ||
                                    newEndDate <= minimumEndDate
                                }
                                className="rounded-xl bg-[#00647c] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#00566a] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processing
                                    ? "Enregistrement..."
                                    : "Prolonger"}
                            </button>

                        </div>

                    </div>
                )}


                {/* INFORMATIONS */}

                <div className="mt-5 space-y-3">

                    <RentalInfoRow
                        icon={<IoMdPerson />}
                        text={clientName}
                    />


                    <RentalInfoRow
                        icon={<MdOutlineCalendarMonth />}
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


                    <RentalInfoRow
                        icon={<FiMapPin />}
                        text={
                            location.zone_geofence?.nom ??
                            "Aucune zone"
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