import { router } from "@inertiajs/react"

interface Equipement {
    id: number
    reference: string
    marque: string
    modele: string
    statut: string
    image: string
}

interface IndexProps{
    equipements: Equipement[]
}

export default function Index({ equipements }: IndexProps){

    const handleClick = (id:number) =>{
        router.visit(`/equipements/${id}`)
    }
    const handleChange = () =>{
        router.visit('/equipements/create-form')
    }

    return(
        <>
        <div>
            <div className="flex justify-between mt-4 p-6">
                <h1>Liste des équipements</h1>
                <button onClick={handleChange} className="bg-red-700 py-4 px-6 rounded-md hover:bg-red-950 cursor-pointer transition-all ease-in">Ajouter un nouvel équipement</button>
            </div>
            <div className="my-5 mx-2 grid grid-cols-4 gap-4">
                {equipements.map(equipement => (
                    <button key={equipement.id} onClick={() => handleClick(equipement.id)} className="h-fit w-fit py-4 px-6 border rounded-md cursor-pointer bg-transparent backdrop-blur-2xl">
                        <div>
                            <img src={`/storage/${equipement.image}`} alt={equipement.reference} />
                        </div>
                        <div className="flex flex-col items-baseline py-4">
                            <div>ID : {equipement.id}</div>
                            <div>Reference : {equipement.reference}</div>
                            <div>Marque : {equipement.marque}</div>
                            <div>Modele : {equipement.modele}</div>
                            <div>Statut : {equipement.statut}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
        </>
    )
}
