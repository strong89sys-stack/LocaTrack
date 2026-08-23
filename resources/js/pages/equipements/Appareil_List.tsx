import { router } from "@inertiajs/react"
import GPS from '/resources/js/assets/appareils/GPS.png'

interface Appareil {
    id: number
    imei: string
    numero_sim: string
    niveau_batterie: number
    statut: string
}

interface IndexProps{
    appareils: Appareil[]
}

export default function Appareil_List({ appareils }: IndexProps){
    const handleClick = (id:number) =>{
        router.visit(`/appareils/${id}`)
    }

    return(
        <>
        <div>
            <div className="max-w-400 px-4 my-5 mx-auto grid grid-cols-3 gap-8">
                {appareils.map(appareil => (
                    <button key={appareil.id} onClick={() => handleClick(appareil.id)}
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
                            <img src={GPS} 
                                className="
                                    object-fill
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                "
                            />
                        </div>
                        <div className="flex flex-col items-baseline py-4 px-3">
                            <div><span>ID :</span> {appareil.id}</div>
                            <div>Imei : {appareil.imei}</div>
                            <div>Numero SIM : {appareil.numero_sim}</div>
                            <div>Batterie : {appareil.niveau_batterie}</div>
                            <div>Statut : {appareil.statut}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
        </>
    )
}
