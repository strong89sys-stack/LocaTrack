import { useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";

interface Client {
    id: number;
    nom: string;
    prenoms: string;
    email: string;
    telephone: string;
    adresse: string;
}

interface Equipement {
    id: number;
    reference: string;
    marque: string;
    modele: string;
    image: string;
    statut_id: number;
}

interface ZoneGeofence {
    id: number;
    nom: string;
}

interface LocationForm {
    client_id: number;
    equipement_id: number;
    zone_geofence_id: number | null;
    date_debut: string;
    date_fin: string;
}

interface LocationRegisterProps {
    clients: Client[];
    equipements: Equipement[];
    zone_geofence: ZoneGeofence[];
}

export default function LocationRegister({
    clients,
    equipements,
    zone_geofence
}: LocationRegisterProps) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm<LocationForm>({
        client_id: 0,
        equipement_id: 0,
        zone_geofence_id: null,
        date_debut: "",
        date_fin: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/locations/create");
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-[#09090b]">
            <div className="mx-auto w-full max-w-2xl">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Créer une location
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Enregistrez un nouveau contrat de location dans votre
                        plateforme.
                    </p>
                </div>

                {/* Card */}
                <form
                    onSubmit={handleSubmit}
                    className="
                        overflow-hidden
                        rounded-2xl
                        border border-gray-200
                        bg-white
                        shadow-sm
                        dark:border-zinc-800
                        dark:bg-zinc-950
                    "
                >
                    <div className="space-y-7 p-8">

                        {/* Client + Équipement */}
                        <div className="grid gap-6 sm:grid-cols-2">

                            {/* Client */}
                            <div>
                                <label
                                    htmlFor="client_id"
                                    className="
                                        mb-2 block
                                        text-sm font-medium
                                        text-gray-900
                                        dark:text-gray-200
                                    "
                                >
                                    Client
                                </label>

                                <select
                                    id="client_id"
                                    value={data.client_id || ""}
                                    onChange={(e) =>
                                        setData(
                                            "client_id",
                                            e.target.value === ""
                                                ? 0
                                                : Number(e.target.value)
                                        )
                                    }
                                    className="
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm
                                        text-gray-900
                                        outline-none
                                        transition
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    "
                                >
                                    <option value="">
                                        Sélectionner un client
                                    </option>

                                    {clients.map((client) => (
                                        <option
                                            key={client.id}
                                            value={client.id}
                                        >
                                            {client.prenoms} {client.nom}
                                        </option>
                                    ))}
                                </select>

                                {errors.client_id && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.client_id}
                                    </p>
                                )}
                            </div>

                            {/* Équipement */}
                            <div>
                                <label
                                    htmlFor="equipement_id"
                                    className="
                                        mb-2 block
                                        text-sm font-medium
                                        text-gray-900
                                        dark:text-gray-200
                                    "
                                >
                                    Équipement
                                </label>

                                <select
                                    id="equipement_id"
                                    value={data.equipement_id || ""}
                                    onChange={(e) =>
                                        setData(
                                            "equipement_id",
                                            e.target.value === ""
                                                ? 0
                                                : Number(e.target.value)
                                        )
                                    }
                                    className="
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm
                                        text-gray-900
                                        outline-none
                                        transition
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    "
                                >
                                    <option value="">
                                        Sélectionner un équipement
                                    </option>

                                    {equipements.map((equipement) => (
                                        <option
                                            key={equipement.id}
                                            value={equipement.id}
                                        >
                                            {equipement.reference} -{" "}
                                            {equipement.marque}{" "}
                                            {equipement.modele}
                                        </option>
                                    ))}
                                </select>

                                {errors.equipement_id && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.equipement_id}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="grid gap-6 sm:grid-cols-2">

                            {/* Date début */}
                            <div>
                                <label
                                    htmlFor="date_debut"
                                    className="
                                        mb-2 block
                                        text-sm font-medium
                                        text-gray-900
                                        dark:text-gray-200
                                    "
                                >
                                    Date de début
                                </label>

                                <input
                                    id="date_debut"
                                    type="date"
                                    value={data.date_debut}
                                    onChange={(e) =>
                                        setData(
                                            "date_debut",
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm
                                        text-gray-900
                                        outline-none
                                        transition
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    "
                                />

                                {errors.date_debut && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.date_debut}
                                    </p>
                                )}
                            </div>

                            {/* Date fin */}
                            <div>
                                <label
                                    htmlFor="date_fin"
                                    className="
                                        mb-2 block
                                        text-sm font-medium
                                        text-gray-900
                                        dark:text-gray-200
                                    "
                                >
                                    Date de fin
                                </label>

                                <input
                                    id="date_fin"
                                    type="date"
                                    value={data.date_fin}
                                    onChange={(e) =>
                                        setData(
                                            "date_fin",
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm
                                        text-gray-900
                                        outline-none
                                        transition
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    "
                                />

                                {errors.date_fin && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.date_fin}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Zone */}
                        <div>
                            <label
                                htmlFor="zone"
                                className="
                                    mb-2 block
                                    text-sm font-medium
                                    text-gray-900
                                    dark:text-gray-200
                                "
                            >
                                Zone
                            </label>

                            <select
                                id="zone"
                                value={data.zone_geofence_id || ""}
                                onChange={(e) => 
                                    setData(
                                        'zone_geofence_id', 
                                        e.target.value === "" 
                                        ? null 
                                        : Number(e.target.value)
                                    )
                                }
                                className="
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-gray-100
                                    px-4 py-3
                                    text-sm
                                    text-gray-900
                                    outline-none
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-gray-400
                                "
                            >
                                <option value="">
                                    Sélectionner une zone
                                </option>
                                {zone_geofence.map(zone => (
                                    <option key={zone.id} value={zone.id}>{zone.nom}</option>
                                ))}
                            </select>
                        </div>

                        {/* Statut */}
                        <div>
                            <label
                                htmlFor="statut"
                                className="
                                    mb-2 block
                                    text-sm font-medium
                                    text-gray-900
                                    dark:text-gray-200
                                "
                            >
                                Statut
                            </label>

                            <select
                                id="statut"
                                value="en_cours"
                                disabled
                                className="
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-gray-100
                                    px-4 py-3
                                    text-sm
                                    text-gray-900
                                    outline-none
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-gray-400
                                "
                            >
                                <option value="en_cours">
                                    En cours
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* Footer */}
                    <div
                        className="
                            flex items-center justify-end
                            border-t border-gray-200
                            bg-gray-50
                            px-8 py-5
                            dark:border-zinc-800
                            dark:bg-zinc-900/50
                        "
                    >
                        <button
                            type="submit"
                            disabled={processing}
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-[#00647c]
                                px-6 py-3
                                text-sm font-semibold
                                text-white
                                shadow-sm
                                transition
                                hover:bg-[#005268]
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#00647c]/30
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
                        >
                            {processing && (
                                <LoaderCircle className="h-4 w-4 animate-spin" />
                            )}

                            {processing
                                ? "Création en cours..."
                                : "Créer la location"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}