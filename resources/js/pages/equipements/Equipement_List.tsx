import { router } from "@inertiajs/react"

interface Position {
    latitude: number
    longitude: number
    vitesse: number
    date_heure: string
}

interface Appareil {
    id: number
    imei: string
    numero_sim: string
    niveau_batterie: number
    statut: string
}

interface Statut{
    id: number
    libelle: string
}

interface Equipement{
    id: number
    reference: string
    marque: string
    modele: string
    statut_id: number
    statut: Statut
    image: string
    appareil: Appareil | null
    position: Position | null
}

interface IndexProps{
    equipements: Equipement[]
}

export default function EquipementList({ equipements }: IndexProps){
    const handleClick = (id:number) =>{
        router.visit(`/equipements/${id}`)
    }

    return(
        <>
        <div>
            <div className="max-w-400 px-4 my-5 mx-auto grid grid-cols-3 gap-8">
                {equipements.map(equipement => (
                    <button key={equipement.id} onClick={() => handleClick(equipement.id)}
                        className="
                            h-fit
                            w-fit
                            rounded-2xl
                            border
                            border-gray-200
                            bg-white
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-xl
                        "
                    >
                        <div
                            className="
                                border-t
                                relative
                                h-50
                                overflow-hidden
                                bg-gray-100
                            "
                        >
                            <img src={`/storage/${equipement.image}`} alt={equipement.reference}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                "
                            />
                        </div>
                        <div className="flex flex-col items-baseline py-4 px-3">
                            <div><span>ID :</span> {equipement.id}</div>
                            <div>Reference : {equipement.reference}</div>
                            <div>Marque : {equipement.marque}</div>
                            <div>Modele : {equipement.modele}</div>
                            <div>Statut : {equipement.statut.libelle}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
        </>
    )
}
