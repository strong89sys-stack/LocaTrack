import { useForm } from "@inertiajs/react"

interface ClientForm{
    nom: string,
    prenoms: string,
    email: string,
    telephone: string,
    adresse: string,
}

export default function Create(){

    const { data, setData, post, processing, errors } = useForm<ClientForm>({
        nom: '',
        prenoms: '',
        email: '',
        telephone: '',
        adresse: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(data)
        post('/clients/create')
    }

    return(
        <>
        <div className="w-full mt-12">
            <form onSubmit={handleSubmit} className="flex flex-col max-w-2/4 p-8 mx-auto border rounded-md bg-transparent backdrop-blur-xl">
                <div className="flex justify-between gap-4 mb-6 py-4">
                    <div className="flex flex-col w-lg">
                        <label htmlFor="nom">Nom</label>
                        <input
                            type="text"
                            value={data.nom}
                            onChange={e => setData('nom', e.target.value)}
                            id="nom"
                            className="input p-4 border rounded-md"
                        />
                        {errors.nom && (
                            <p className="text-red-500">
                                {errors.nom}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col w-lg">
                        <label htmlFor="prenoms">Prenoms</label>
                        <input
                            type="text"
                            value={data.prenoms}
                            onChange={e => setData('prenoms', e.target.value)}
                            id="prenoms"
                            className="input p-4 border rounded-md"
                        />
                        {errors.prenoms && (
                            <p className="text-red-500">
                                {errors.prenoms}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col mb-6 py-4">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        id="email"
                        className="input p-4 border rounded-md"
                    />
                    {errors.email && (
                        <p className="text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-6 py-4">
                    <label htmlFor="telephone">Telephone</label>
                    <input
                        type="text"
                        value={data.telephone}
                        onChange={e => setData('telephone', e.target.value)}
                        id="telephone"
                        className="input p-4 border rounded-md"
                    />
                    {errors.telephone && (
                        <p className="text-red-500">
                            {errors.telephone}
                        </p>
                    )}
                </div>
                <div className="flex flex-col mb-6 py-4">
                    <label htmlFor="adresse">Adresse</label>
                    <input
                        type="text"
                        value={data.adresse}
                        onChange={e => setData('adresse', e.target.value)}
                        id="adresse"
                        className="input p-4 border-2 rounded-md"
                    />
                    {errors.adresse && (
                        <p className="text-red-500">
                            {errors.adresse}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-950 p-6 rounded-md"
                >
                    {processing ? 'Creation ...' : 'Créer le client'}
                </button>
            </form>
        </div>
        </>
    )
}
