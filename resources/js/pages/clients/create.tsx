import { router, useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";

interface ClientForm {
    nom: string;
    prenoms: string;
    email: string;
    telephone: string;
    adresse: string;
}

export default function Create() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm<ClientForm>({
        nom: "",
        prenoms: "",
        email: "",
        telephone: "",
        adresse: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/clients/create", {
            onSuccess: () => {
                router.visit('/locations/form')
            }
        });
    };

    const handleBack = () =>{
        router.visit('/locations');
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-[#09090b]">
            <div className="mx-auto w-full max-w-2xl">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Ajouter un client
                        </h1>

                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Enregistrez un nouveau client dans votre plateforme.
                        </p>
                    </div>

                    <button onClick={handleBack} className="font-bold hover:underline transition-all">Retour</button>
                </div>

                {/* Card */}
                <form
                    onSubmit={handleSubmit}
                    className=" overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                >
                    <div className="space-y-7 p-8">

                        {/* Nom + Prénoms */}
                        <div className="grid gap-6 sm:grid-cols-2">

                            {/* Nom */}
                            <div>
                                <label
                                    htmlFor="nom"
                                    className="
                                        mb-2 block
                                        text-sm font-medium
                                        text-gray-900
                                        dark:text-gray-200
                                    "
                                >
                                    Nom
                                </label>

                                <input
                                    id="nom"
                                    type="text"
                                    value={data.nom}
                                    onChange={(e) =>
                                        setData("nom", e.target.value)
                                    }
                                    placeholder="Ex : Kaboré"
                                    className="
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm text-gray-900
                                        outline-none
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

                                {errors.nom && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.nom}
                                    </p>
                                )}
                            </div>

                            {/* Prénoms */}
                            <div>
                                <label
                                    htmlFor="prenoms"
                                    className="
                                        mb-2 block
                                        text-sm font-medium
                                        text-gray-900
                                        dark:text-gray-200
                                    "
                                >
                                    Prénoms
                                </label>

                                <input
                                    id="prenoms"
                                    type="text"
                                    value={data.prenoms}
                                    onChange={(e) =>
                                        setData("prenoms", e.target.value)
                                    }
                                    placeholder="Ex : Aziz"
                                    className="
                                        w-full rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-sm text-gray-900
                                        outline-none
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

                                {errors.prenoms && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.prenoms}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="
                                    mb-2 block
                                    text-sm font-medium
                                    text-gray-900
                                    dark:text-gray-200
                                "
                            >
                                Adresse e-mail
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Ex : client@example.com"
                                className="
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-white
                                    px-4 py-3
                                    text-sm text-gray-900
                                    outline-none
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

                            {errors.email && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Téléphone */}
                        <div>
                            <label
                                htmlFor="telephone"
                                className="
                                    mb-2 block
                                    text-sm font-medium
                                    text-gray-900
                                    dark:text-gray-200
                                "
                            >
                                Téléphone
                            </label>

                            <input
                                id="telephone"
                                type="tel"
                                value={data.telephone}
                                onChange={(e) =>
                                    setData("telephone", e.target.value)
                                }
                                placeholder="Ex : +225 07 00 00 00 00"
                                className="
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-white
                                    px-4 py-3
                                    text-sm text-gray-900
                                    outline-none
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

                            {errors.telephone && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.telephone}
                                </p>
                            )}
                        </div>

                        {/* Adresse */}
                        <div>
                            <label
                                htmlFor="adresse"
                                className="
                                    mb-2 block
                                    text-sm font-medium
                                    text-gray-900
                                    dark:text-gray-200
                                "
                            >
                                Adresse
                            </label>

                            <input
                                id="adresse"
                                type="text"
                                value={data.adresse}
                                onChange={(e) =>
                                    setData("adresse", e.target.value)
                                }
                                placeholder="Ex : Cocody, Abidjan"
                                className="
                                    w-full rounded-lg
                                    border border-gray-300
                                    bg-white
                                    px-4 py-3
                                    text-sm text-gray-900
                                    outline-none
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

                            {errors.adresse && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.adresse}
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
                                : "Créer le client"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}