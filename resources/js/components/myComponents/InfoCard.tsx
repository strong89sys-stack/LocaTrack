import { ScrollText } from "lucide-react";
// import { IoIosConstruct } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GrAlert } from "react-icons/gr";
import { MdPrecisionManufacturing } from "react-icons/md";
import { RiWifiOffLine } from "react-icons/ri";
import { useCurrentTime } from "@/hooks/useCurrentTime";

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

interface CardProps{
    equipements: Equipement[]
    alertesActives: number
}

export default function InfoCard({equipements, alertesActives}: CardProps){

    const now = useCurrentTime()

    const disponible = equipements.filter(
        item => item.statut.libelle === 'Disponible'
    )

    const en_location = equipements.filter(
        item => item.statut.libelle === 'En Location'
    )

    const offline = equipements.filter(item => {

        if (!item.position?.date_heure) {
            return true
        }

        if (now === null) {
            return false
        }

        const lastPosition = new Date(
            item.position.date_heure
        ).getTime()

        const elapsed_time = 5 * 60 * 1000

        return now - lastPosition > elapsed_time
    })


    const cards = [
        {
            title: "Total Equipement",
            value: equipements.length,
            icon: MdPrecisionManufacturing
        },
        {
            title: "Location En Cours",
            value: en_location.length,
            icon: ScrollText
        },
        {
            title: "Disponible",
            value: disponible.length,
            icon: FaRegCircleCheck
        },
        {
            title: "Alertes Active",
            value: alertesActives,
            alert: true,
            icon: GrAlert
        },
        {
            title: "Appareils Hors-Lignes",
            value: offline.length,
            icon: RiWifiOffLine
        },
    ];

    return(
        <>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {cards.map((item, index) => {
                const Icon = item.icon

                return (
                    item.alert ?
                        (<div key={index} className='p-5 flex justify-between flex-col uppercase bg-card rounded-md border border-border border-l-8 border-l-red-900 shadow hover:-translate-y-1.25 transition-all '>
                            <div className='flex items-center justify-between mb-4'>
                                <span className='text-[13px] text-[#3e484d] leading-4 font-bold font-[Inter, sans] text-[rgba(62, 72, 77, 1)]'>
                                    {item.title}
                                </span>
                                <span className='text-[20px] text-[#ba1a1a] leading-5 bg-icon-bg rounded-md p-1 '>
                                    <Icon />
                                </span>
                            </div>
                            <div className='text-[36px] font-bold leading-11'>{item.value}</div>
                        </div>) :
                        (<div key={index} className='p-5 flex justify-between flex-col uppercase bg-card rounded-md border border-border shadow hover:-translate-y-1.25 transition-all '>
                            <div className="flex items-center justify-between mb-4">
                                <span className='text-[13px] text-[#3e484d] leading-4 font-bold font-[Inter, sans] text-[rgba(62, 72, 77, 1)]'>
                                    {item.title}
                                </span>
                                <span className="text-[20px] text-[#007f9d] leading-5 bg-icon-bg rounded-md p-1 ">
                                    <Icon />
                                </span>
                            </div>
                            <div className="text-4xl font-bold">{item.value}</div>
                        </div>)
                )
            })}
        </div>
        </>
    )
}
