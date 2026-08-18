interface Client {
    id: number
    nom: string
    prenoms: string
    telephone: string
    email: string
    adresse: string
}

interface showProps {
    client: Client
}

export default function Show({ client }: showProps){
    return (
        <>
            <div>
                <h1>Clients</h1>
                <div>
                    <p>ID : {client.id}</p>
                    <p>{client.nom} - {client.prenoms}</p>
                    <p>{client.telephone}</p>
                    <p>{client.email}</p>
                    <p>{client.adresse}</p>
                </div>
            </div>
        </>
    )
}
