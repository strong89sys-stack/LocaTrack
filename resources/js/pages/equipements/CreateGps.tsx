import { router, useForm } from "@inertiajs/react";
import { Cpu, LoaderCircle, Smartphone } from "lucide-react";

interface Appareil {
    imei: string;
    numero_sim: string;
    niveau_batterie: number;
    statut: string;
    equipement_id: number;
}

interface Equipement {
    id: number;
    reference: string;
    marque: string;
    modele: string;
}

interface CreateGpsProps {
    equipements: Equipement[];
}

export default function CreateGps({
    equipements,
}: CreateGpsProps) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm<Appareil>({
        imei: "",
        numero_sim: "",
        niveau_batterie: 100,
        statut: "Actif",
        equipement_id: 0,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/appareils/create", {
            onSuccess: () => {
                router.visit('/equipements')
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-[#09090b]">
            <div className="mx-auto w-full max-w-2xl">

                {/* Header */}
                <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00647c]/10">
                            <Cpu className="h-5 w-5 text-[#00647c]" />
                        </div>

                        <span className="text-sm font-medium text-[#00647c]">
                            Gestion des appareils
                        </span>
                    </div>

                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Ajouter un appareil GPS
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Enregistrez un nouveau dispositif GPS et associez-le
                        à un équipement.
                    </p>
                </div>

                {/* Form Card */}
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

                        {/* IMEI */}
                        <div>
                            <label
                                htmlFor="imei"
                                className="
                                    mb-2 block text-sm font-medium
                                    text-gray-900 dark:text-gray-200
                                "
                            >
                                Numéro IMEI
                            </label>

                            <div className="relative">
                                <Smartphone
                                    className="
                                        absolute left-3 top-1/2
                                        h-4 w-4 -translate-y-1/2
                                        text-gray-400
                                    "
                                />

                                <input
                                    id="imei"
                                    type="text"
                                    value={data.imei}
                                    onChange={(e) =>
                                        setData("imei", e.target.value)
                                    }
                                    placeholder="Ex : 356938035643809"
                                    required
                                    className="
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        py-3 pl-10 pr-4
                                        text-sm text-gray-900
                                        outline-none transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    "
                                />
                            </div>

                            {errors.imei && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.imei}
                                </p>
                            )}
                        </div>

                        {/* SIM + Batterie */}
                        <div className="grid gap-6 sm:grid-cols-2">

                            {/* SIM */}
                            <div>
                                <label
                                    htmlFor="numero_sim"
                                    className="
                                        mb-2 block text-sm font-medium
                                        text-gray-900 dark:text-gray-200
                                    "
                                >
                                    Numéro SIM
                                </label>

                                <input
                                    id="numero_sim"
                                    type="text"
                                    value={data.numero_sim}
                                    onChange={(e) =>
                                        setData(
                                            "numero_sim",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Ex : 0700000000"
                                    required
                                    className="
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm text-gray-900
                                        outline-none transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    "
                                />

                                {errors.numero_sim && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.numero_sim}
                                    </p>
                                )}
                            </div>

                            {/* Batterie */}
                            <div>
                                <label
                                    htmlFor="niveau_batterie"
                                    className="
                                        mb-2 block text-sm font-medium
                                        text-gray-900 dark:text-gray-200
                                    "
                                >
                                    Niveau de batterie
                                </label>

                                <div className="relative">
                                    <input
                                        id="niveau_batterie"
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={data.niveau_batterie}
                                        onChange={(e) =>
                                            setData(
                                                "niveau_batterie",
                                                Number(e.target.value)
                                            )
                                        }
                                        disabled
                                        className="
                                            w-full rounded-lg
                                            border border-gray-300
                                            bg-white
                                            px-4 py-3 pr-12
                                            text-sm text-gray-900
                                            outline-none transition
                                            focus:border-[#00647c]
                                            focus:ring-2
                                            focus:ring-[#00647c]/20
                                            dark:border-zinc-700
                                            dark:bg-zinc-900
                                            dark:text-white
                                            disabled:bg-gray-200
                                        "
                                    />

                                    <span className="
                                        absolute right-4 top-1/2
                                        -translate-y-1/2
                                        text-sm text-gray-400
                                    ">
                                        %
                                    </span>
                                </div>

                                {errors.niveau_batterie && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.niveau_batterie}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Statut */}
                        <div>
                            <label
                                htmlFor="statut"
                                className="
                                    mb-2 block text-sm font-medium
                                    text-gray-900 dark:text-gray-200
                                "
                            >
                                Statut de l'appareil
                            </label>

                            <select
                                id="statut"
                                value={data.statut}
                                onChange={(e) =>
                                    setData(
                                        "statut",
                                        e.target.value
                                    )
                                }
                                disabled
                                className="
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-white
                                    px-4 py-3
                                    text-sm text-gray-900
                                    outline-none transition
                                    focus:border-[#00647c]
                                    focus:ring-2
                                    focus:ring-[#00647c]/20
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-white
                                    disabled:bg-gray-200
                                "
                            >
                                <option value="Actif">
                                    Actif
                                </option>

                                <option value="Inactif">
                                    Inactif
                                </option>
                            </select>

                            {errors.statut && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.statut}
                                </p>
                            )}
                        </div>

                        {/* Équipement */}
                        <div>
                            <label
                                htmlFor="equipement_id"
                                className="
                                    mb-2 block text-sm font-medium
                                    text-gray-900 dark:text-gray-200
                                "
                            >
                                Équipement associé
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
                                    text-sm text-gray-900
                                    outline-none transition
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

                                {equipements.map((item) => (
                                    <option
                                        key={item.id}
                                        value={item.id}
                                    >
                                        {item.reference} —{" "}
                                        {item.marque} {item.modele}
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
                                inline-flex items-center
                                justify-center gap-2
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
                                <LoaderCircle
                                    className="h-4 w-4 animate-spin"
                                />
                            )}

                            {processing
                                ? "Ajout en cours..."
                                : "Ajouter l'appareil"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
