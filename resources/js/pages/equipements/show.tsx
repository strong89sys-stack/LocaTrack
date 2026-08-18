interface Equipement{
    id: number
    reference: string
    marque:string
    modele:string
    statut:string
    image: string
}

interface showProps {
    equipement: Equipement
}

export default function Show({ equipement }: showProps){
    return(
        <>
        <div>
            <div>
                <img src={`/storage/${equipement.image}`} alt={equipement.reference} />
            </div>
            <div>
                <div>ID : {equipement.id}</div>
                <div>Reference : {equipement.reference}</div>
                <div>Marque : {equipement.marque}</div>
                <div>Modele : {equipement.modele}</div>
                <div>Statut : {equipement.statut}</div>
            </div>
        </div>
        </>
    )
}
