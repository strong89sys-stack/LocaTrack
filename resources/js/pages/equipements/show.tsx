import { router } from "@inertiajs/react";

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
}

interface ShowProps {
    equipement: Equipement;
    statuts: Statut[];
    enLocation: boolean;
}

export default function Show({
    equipement,
    statuts,
    enLocation,
}: ShowProps) {

    const handleBack = () => {
        router.visit("/equipements");
    };

    const handleStatutChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {

        const statutId = Number(event.target.value);

        if (enLocation) {
            return;
        }

        router.put(
            `/equipements/${equipement.id}/statut`,
            {
                statut_id: statutId,
            },
            {
                preserveScroll: true,
            }
        );
    };

    const disponible =
        equipement.statut.libelle.toLowerCase() === "disponible";

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-8">

            <div className="mx-auto max-w-6xl">

                {/* HEADER */}

                <div className="mb-6 flex items-center justify-between">

                    <div>

                        <p className="text-sm text-gray-500">
                            Gestion des équipements
                        </p>

                        <h1 className="mt-1 text-2xl font-bold text-[#121c28]">
                            Détails de l'équipement
                        </h1>

                    </div>

                    <button
                        type="button"
                        onClick={handleBack}
                        className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:shadow"
                    >
                        ← Retour
                    </button>

                </div>


                {/* CARTE PRINCIPALE */}

                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

                    <div className="grid grid-cols-1 lg:grid-cols-2">


                        {/* IMAGE */}

                        <div className="relative h-[420px] overflow-hidden bg-gray-100">

                            <img
                                src={`/storage/${equipement.image}`}
                                alt={equipement.reference}
                                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6">

                                <p className="text-xs uppercase tracking-widest text-white/70">
                                    Équipement
                                </p>

                                <h2 className="mt-1 text-3xl font-bold text-white">
                                    {equipement.reference}
                                </h2>

                            </div>

                        </div>


                        {/* INFORMATIONS */}

                        <div className="p-8">

                            {/* TITRE + STATUT */}

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <p className="text-sm text-gray-400">
                                        Référence
                                    </p>

                                    <h2 className="mt-1 text-3xl font-bold text-[#121c28]">
                                        {equipement.reference}
                                    </h2>

                                </div>

                                <span
                                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
                                        disponible
                                            ? "bg-green-50 text-green-700"
                                            : "bg-red-50 text-red-700"
                                    }`}
                                >

                                    <span
                                        className={`h-2 w-2 rounded-full ${
                                            disponible
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                        }`}
                                    />

                                    {equipement.statut.libelle}

                                </span>

                            </div>


                            {/* SÉPARATION */}

                            <div className="my-8 h-px bg-gray-100" />


                            {/* INFORMATIONS */}

                            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                                Informations
                            </h3>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">


                                {/* ID */}

                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">

                                    <p className="text-xs text-gray-400">
                                        Identifiant
                                    </p>

                                    <p className="mt-2 text-lg font-bold text-[#121c28]">
                                        #{equipement.id}
                                    </p>

                                </div>


                                {/* MARQUE */}

                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">

                                    <p className="text-xs text-gray-400">
                                        Marque
                                    </p>

                                    <p className="mt-2 text-lg font-bold text-[#121c28]">
                                        {equipement.marque}
                                    </p>

                                </div>


                                {/* MODELE */}

                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">

                                    <p className="text-xs text-gray-400">
                                        Modèle
                                    </p>

                                    <p className="mt-2 text-lg font-bold text-[#121c28]">
                                        {equipement.modele}
                                    </p>

                                </div>


                                {/* STATUT */}

                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:col-span-2">

                                    <div className="flex items-start justify-between gap-4">

                                        <div>

                                            <p className="text-xs text-gray-400">
                                                Statut
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {enLocation
                                                    ? "Le statut ne peut pas être modifié pendant une location."
                                                    : "Vous pouvez modifier le statut de cet équipement."
                                                }
                                            </p>

                                        </div>

                                        <span
                                            className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                                                enLocation
                                                    ? "bg-orange-500"
                                                    : "bg-green-500"
                                            }`}
                                        />

                                    </div>


                                    <select
                                        value={equipement.statut_id}
                                        disabled={enLocation}
                                        onChange={handleStatutChange}
                                        className={`mt-4 w-full rounded-xl border px-4 py-3 text-sm font-semibold outline-none transition ${
                                            enLocation
                                                ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                                                : "cursor-pointer border-gray-200 bg-white text-gray-800 focus:border-[#00647c] focus:ring-2 focus:ring-[#00647c]/10"
                                        }`}
                                    >

                                        {statuts.map((statut) => (

                                            <option
                                                key={statut.id}
                                                value={statut.id}
                                            >
                                                {statut.libelle}
                                            </option>

                                        ))}

                                    </select>

                                    {enLocation && (
                                        <p className="mt-3 text-xs font-medium text-orange-600">
                                            ⚠ Cet équipement est actuellement en location.
                                        </p>
                                    )}

                                </div>

                            </div>


                            {/* FOOTER */}

                            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">

                                <div>

                                    <p className="text-xs text-gray-400">
                                        ID équipement
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-gray-700">
                                        #{equipement.id}
                                    </p>

                                </div>

                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="rounded-xl bg-[#00647c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#00566a] hover:shadow-md"
                                >
                                    Retour aux équipements
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}