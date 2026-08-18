import { FaCircleDot } from "react-icons/fa6";

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

interface DataViewProps{
    equipements: Equipement[]
}

export default function DataView({equipements}: DataViewProps){

    const statutStyles = {
        "Disponible": {
            text: "text-[#00647c]",
            dot: "bg-[#004e61]",
        },
        "En Location": {
            text: "text-[#00237c]",
            dot: "bg-[#00237c]",
        },
        "En Maintenance": {
            text: "text-[#7c7a00]",
            dot: "bg-[#7c7a00]",
        },
        "Hors Service": {
            text: "text-[#7c0000]",
            dot: "bg-[#7c0000]",
        },
    }

    return (
        <>
        <div className="col-span-12 overflow-hidden">
            <div className="p-6 border-b bg-white border-b-[#bdc8ce] flex items-center justify-between shadow mb-2 ">
                <h3 className="leading-7 font-semibold text-[22px] text-[#121c28] ">
                    Activité Récente
                </h3>
                <a href="#" className="text-[#00647c] text-[14px] leading-4 tracking-wider font-bold decoration-0 hover:scale-105 ">
                    Voir tout ...
                </a>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse relative ">
                    <thead className="border-0 shadow">
                        <tr className="text-[#3e484d] uppercase tracking-wider text-[14px] leading-4 font-semibold ">
                            <th className="p-4 py-3 font-semibold">Reference</th>
                            <th className="p-4 py-3 font-semibold">Type</th>
                            <th className="p-4 py-3 font-semibold">Status</th>
                            <th className="p-4 py-3 font-semibold">Location</th>
                            <th className="p-4 py-3 font-semibold">Batterie</th>
                            <th className="p-4 py-3 font-semibold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#121c28] text-[14px] leading-4 font-normal ">
                        {equipements.map(item => {
                            const style = statutStyles[
                                item.statut.libelle as keyof typeof statutStyles
                            ]

                            return(
                                <tr key={item.id} className="bg-[#b7eaff0d]">
                                    <td className="p-4 font-bold text-[#00647c] ">{item.reference}</td>
                                    <td className="p-4 font-bold text-[#3e484d] ">{item.marque} - {item.modele}</td>


                                    <td className={`p-4 font-bold ${style.text} flex items-center gap-1`}>
                                        <FaCircleDot
                                            className={`text-[6px] ${style.dot} rounded-full`}
                                        />

                                        {item.statut.libelle}
                                    </td>

                                    <td className="p-4 font-bold text-[#3e484d] ">Zone 4, Marcory</td>
                                    <td className="p-4 font-bold text-[#00647c] ">
                                        <div className="flex items-center gap-2">
                                            {item.appareil?.niveau_batterie <= 20 ?
                                                <div className="w-16 h-1.5 bg-red-100 overflow-hidden rounded-full ">
                                                    <div className="h-full bg-red-600 " style={{ width: `${item.appareil?.niveau_batterie}%`, }}></div>
                                                </div> : item.appareil?.niveau_batterie >= 50 ?
                                                    <div className="w-16 h-1.5 bg-[#e5eeff] overflow-hidden rounded-full ">
                                                        <div className="h-full bg-[#00647c] " style={{ width: `${item.appareil?.niveau_batterie}%`, }}></div>
                                                    </div> :
                                                    <div className="w-16 h-1.5 bg-yellow-100 overflow-hidden rounded-full ">
                                                        <div className="h-full bg-yellow-400 " style={{ width: `${item.appareil?.niveau_batterie}%`, }}></div>
                                                    </div>
                                            }
                                            <span className="text-[#3e484d] ">{item.appareil?.niveau_batterie}%</span>
                                        </div>
                                    </td>
                                    <td className="p-4 font-bold text-[#00647c] text-right "></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
