interface Appareil {
    id: number
    imei: string
    numero_sim: string
    niveau_batterie: number
    statut: string
}

interface showProps {
    appareil: Appareil
}

export default function Show({ appareil }: showProps){
    return(
        <>
        <div>
            {/* <div>
                <img src={`/storage/${appareil.image}`} alt={appareil.reference} />
            </div> */}
            <div>
                <div>ID : {appareil.id}</div>
                <div>Reference : {appareil.imei}</div>
                <div>Marque : {appareil.numero_sim}</div>
                <div>Modele : {appareil.niveau_batterie}</div>
                <div>Statut : {appareil.statut}</div>
            </div>
        </div>
        </>
    )
}
