import { useForm } from "@inertiajs/react";
import { ImagePlus, LoaderCircle } from "lucide-react";

interface Equipement {
    reference: string;
    marque: string;
    modele: string;
    statut_id: number;
    image: File | null;
}

interface Statut {
    id: number;
    libelle: string;
}

interface CreateProps {
    statuts: Statut[];
}

export default function CreateEquipement({ statuts }: CreateProps) {
    const { data, setData, post, processing, errors } = useForm<Equipement>({
        reference: "",
        marque: "",
        modele: "",
        statut_id: 0,
        image: null,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/equipements/create");
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-[#09090b]">
            <div className="mx-auto w-full max-w-2xl">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Ajouter un équipement
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Enregistrez un nouveau matériel dans votre parc.
                    </p>
                </div>

                {/* Card */}
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
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

                        {/* Référence */}
                        <div>
                            <label
                                htmlFor="reference"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                            >
                                Référence
                            </label>

                            <input
                                id="reference"
                                type="text"
                                value={data.reference}
                                onChange={(e) =>
                                    setData("reference", e.target.value)
                                }
                                placeholder="Ex : EQ-2026-001"
                                className="
                                    w-full rounded-lg border border-gray-300
                                    bg-white px-4 py-3 text-sm
                                    text-gray-900 outline-none
                                    transition
                                    placeholder:text-gray-400
                                    focus:border-[#00647c]
                                    focus:ring-2
                                    focus:ring-[#00647c]/20
                                    dark:border-zinc-700
                                    dark:bg-zinc-900
                                    dark:text-white
                                "
                            />

                            {errors.reference && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.reference}
                                </p>
                            )}
                        </div>

                        {/* Marque + Modèle */}
                        <div className="grid gap-6 sm:grid-cols-2">

                            <div>
                                <label
                                    htmlFor="marque"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                                >
                                    Marque
                                </label>

                                <input
                                    id="marque"
                                    type="text"
                                    value={data.marque}
                                    onChange={(e) =>
                                        setData("marque", e.target.value)
                                    }
                                    placeholder="Ex : Caterpillar"
                                    className="
                                        w-full rounded-lg border border-gray-300
                                        bg-white px-4 py-3 text-sm
                                        text-gray-900 outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    "
                                />

                                {errors.marque && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.marque}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="modele"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                                >
                                    Modèle
                                </label>

                                <input
                                    id="modele"
                                    type="text"
                                    value={data.modele}
                                    onChange={(e) =>
                                        setData("modele", e.target.value)
                                    }
                                    placeholder="Ex : 320D"
                                    className="
                                        w-full rounded-lg border border-gray-300
                                        bg-white px-4 py-3 text-sm
                                        text-gray-900 outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-[#00647c]
                                        focus:ring-2
                                        focus:ring-[#00647c]/20
                                        dark:border-zinc-700
                                        dark:bg-zinc-900
                                        dark:text-white
                                    "
                                />

                                {errors.modele && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.modele}
                                    </p>
                                )}
                            </div>

                        </div>

                        {/* Statut */}
                        <div>
                            <label
                                htmlFor="statut"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                            >
                                Statut
                            </label>

                            <select
                                id="statut"
                                value={data.statut_id || ""}
                                onChange={(e) =>
                                    setData(
                                        "statut_id",
                                        e.target.value === ""
                                            ? 0
                                            : Number(e.target.value)
                                    )
                                }
                                className="
                                    w-full rounded-lg border border-gray-300
                                    bg-white px-4 py-3 text-sm
                                    text-gray-900 outline-none
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
                                    Sélectionner un statut
                                </option>

                                {statuts.map((statut) => (
                                    <option
                                        key={statut.id}
                                        value={statut.id}
                                    >
                                        {statut.libelle}
                                    </option>
                                ))}
                            </select>

                            {errors.statut_id && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.statut_id}
                                </p>
                            )}
                        </div>

                        {/* Image */}
                        <div>
                            <label
                                htmlFor="image"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                            >
                                Image de l'équipement
                            </label>

                            <label
                                htmlFor="image"
                                className="
                                    flex cursor-pointer flex-col
                                    items-center justify-center
                                    rounded-xl border-2 border-dashed
                                    border-gray-300
                                    px-6 py-10
                                    transition
                                    hover:border-[#00647c]
                                    hover:bg-gray-50
                                    dark:border-zinc-700
                                    dark:hover:bg-zinc-900
                                "
                            >
                                <ImagePlus
                                    className="mb-3 h-10 w-10 text-gray-400"
                                />

                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {data.image
                                        ? data.image.name
                                        : "Cliquez pour sélectionner une image"}
                                </span>

                                <span className="mt-1 text-xs text-gray-400">
                                    PNG, JPG ou JPEG
                                </span>

                                <input
                                    id="image"
                                    type="file"
                                    accept="image/png,image/jpeg,image/jpg"
                                    className="hidden"
                                    onChange={(e) =>
                                        setData(
                                            "image",
                                            e.target.files?.[0] ?? null
                                        )
                                    }
                                />
                            </label>

                            {errors.image && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.image}
                                </p>
                            )}
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="
                        flex items-center justify-end
                        border-t border-gray-200
                        bg-gray-50
                        px-8 py-5
                        dark:border-zinc-800
                        dark:bg-zinc-900/50
                    ">
                        <button
                            type="submit"
                            disabled={processing}
                            className="
                                inline-flex items-center justify-center
                                gap-2 rounded-lg
                                bg-[#00647c]
                                px-6 py-3
                                text-sm font-semibold text-white
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
                                ? "Ajout en cours..."
                                : "Ajouter l'équipement"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
