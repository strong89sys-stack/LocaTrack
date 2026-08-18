import { useForm } from "@inertiajs/react";

interface Equipement {
    reference: string
    marque: string
    modele: string
    statut_id: number
    image: File | null
}

interface Statut{
    id: number
    libelle: string
}

interface createProps{
    statuts: Statut[]
}

export default function CreateEquipement({ statuts }: createProps){

    const {data, setData, post, processing, errors} = useForm<Equipement>({
        reference: '',
        marque: '',
        modele: '',
        statut_id: 0,
        image: null
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        post('/equipements/create')
    }

    return(
        <>
        <div className="my-12">
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col max-w-2/4 mx-auto border p-10 rounded-md">
                <div className="flex flex-col mb-6 py-4 gap-4">
                    <label htmlFor="ref">Reference</label>
                    <input
                        type="text"
                        value={data.reference}
                        onChange={(e) => setData('reference', e.target.value)}
                        className="input p-4 border rounded-md"
                        id="ref"
                    />
                    {errors.reference && (
                        <p className="text-red-500">
                            {errors.reference}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-6 py-4 gap-4">
                    <label htmlFor="marque">Marque</label>
                    <input
                        type="text"
                        value={data.marque}
                        onChange={(e) => setData('marque', e.target.value)}
                        className="input p-4 border rounded-md"
                        id="marque"
                    />
                    {errors.marque && (
                        <p className="text-red-500">
                            {errors.marque}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-6 py-4 gap-4">
                    <label htmlFor="modele">Modele</label>
                    <input
                        type="text"
                        value={data.modele}
                        onChange={(e) => setData('modele', e.target.value)}
                        className="input p-4 border rounded-md"
                        id="modele"
                    />
                    {errors.modele && (
                        <p className="text-red-500">
                            {errors.modele}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-6 py-4 gap-4">
                    <label htmlFor="statut">Statut</label>
                    <select 
                        name="statut" 
                        id="statut"
                        onChange={(e) => setData('statut_id', e.target.value === "" ? 0 : Number(e.target.value))}
                        className="input p-4 border rounded-md"
                    >
                        <option value="">sélectionner un statut</option>
                        {statuts.map(item => (
                            <option key={item.id} value={item.id}>{item.libelle}</option>
                        ))}
                    </select>
                    {errors.statut_id && (
                        <p className="text-red-500">
                            {errors.statut_id}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-6 py-4 gap-4">
                    <label htmlFor="image">image</label>
                    <input
                        type="file"
                        onChange={(e) => setData('image', e.target.files?.[0] ?? null)}
                        className="input p-4 border rounded-md"
                        id="image"
                    />
                    {errors.image && (
                        <p className="text-red-500">
                            {errors.image}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-950 p-6 rounded-md cursor-pointer"
                >
                    {
                        processing ? 'Ajout ...' : "Ajouter l'équipement"
                    }
                </button>
            </form>

        </div>
        </>
    )
}
