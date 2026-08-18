import { router } from "@inertiajs/react";

interface Client{
    id: number
    nom: string
    prenoms: string
    telephone: string
    email: string
    adresse: string
}
interface IndexProps {
    clients: Client[]
}

export default function Index({ clients }: IndexProps){

    const handleClick = (id: number) =>{
        router.visit(`/clients/${id}`)
    }
    const handleSubmit = () => {
        router.visit('/clients/form')
    }

    return (
        <>
            <div><button onClick={handleSubmit} className="bg-red-600 w-fit py-4 px-6 rounded-md hover:bg-gray-800">Créer un client</button></div>
            <div className="flex flex-col justify-center items-center gap-3 w-full">
                <h1>Clients</h1>
                {clients.map(client => (
                    <button onClick={() => handleClick(client.id)} key={client.id} className="bg-gray-600 w-fit py-4 px-6 rounded-md hover:bg-gray-800">
                        {client.nom}-{client.prenoms}
                    </button>
                ))}
            </div>
        </>
    )
}
