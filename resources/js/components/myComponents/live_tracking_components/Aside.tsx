import { motion } from 'framer-motion'

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

interface AsideProps{
    equipements: Equipement[]
    onSelect: (position: [number, number]) => void
}

export default function Aside({equipements, onSelect}: AsideProps){

    const isOffline = (item: Equipement) => {
        if(!item.position?.date_heure){
            return true
        }

        const lastPosition = new Date(item.position.date_heure).getTime()
        const now = Date.now()
        const elapsed_time = 5 * 60 * 1000

        return now - lastPosition > elapsed_time
    }
    
    return (
        <>
        <aside className="col-span-3 h-screen flex flex-col">
            <div className="p-6 bg-[#f8f9ff] border-b border-b-[#bdc8ce] flex items-center justify-between ">
                <h2 className="leading-7 font-semibold text-[#121c28] text-[20px] ">Etat</h2>
                <span className="flex h-3 w-3 relative">
                    <motion.span animate={{ opacity: [0, 0.4, 0], scale: [0, 1.9, 1] }} transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }} className="absolute bg-[#00647c] h-full w-full rounded-full inline-flex "></motion.span>
                    <span className="relative inline-flex rounded-full w-3 h-3 bg-[#00647c] opacity-100 "></span>
                </span>
            </div>
            <div className="flex-1 min-h-0 p-4 overflow-y-auto space-y-4">

                {equipements.map(item => {
                    const offline = isOffline(item)

                    return (
                        <div 
                            key={item.id} 
                            className={`p-4 bg-white border border-[#bdc8ce] border-l-8 rounded-md cursor-pointer shadow 
                                ${offline ?
                                    'border-l-red-800' :
                                    'border-l-[#00647c]'
                                }
                            `}
                            onClick={() => {
                                if (!item.position) {
                                    return
                                }

                                onSelect([
                                    item.position.latitude,
                                    item.position.longitude
                                ])
                            }}
                        >
                            <div className="flex justify-between items-center mb-3">
                                <div>
                                    <h3 className='text-[#121c28] tracking-wider uppercase font-semibold '>{item.reference}</h3>
                                    <p className={`text-[#00647c] leading-7 text-[20px] font-bold mt-1 ${
                                        offline ?
                                            'text-red-500' :
                                            'text-[#00647c]'
                                    } `}>{item.modele}</p>
                                </div>
                                <div className={`leading-4 font-semibold px-2 py-1 text-[0.75rem] rounded-md flex items-center gap-1 ${
                                    offline ?
                                        'text-red-500 bg-red-100' :
                                        'text-[#00647c] bg-[#e5eeff]'
                                } `}>
                                    <span className={`w-2 h-2 rounded-full inline-block ${
                                        offline ?
                                            'bg-red-500' :
                                            'bg-[#00647c]'
                                    } `}></span> {offline ? 'Inactif' : 'Actif'}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-sm border-t pt-3">
                                <div className='col-span-2 text-center'>
                                    <p className="text-xs">Vitesse</p>
                                    <p className="font-semibold">{item.position?.vitesse} km/h</p>
                                </div>
                                <div className='col-span-2 text-center border-t pt-2'>
                                    <p className="text-xs">Position Actuelle</p>
                                    <p className="font-semibold">Zone C, Nord d'Abidjan</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* <div className="p-4 bg-white border border-[#bdc8ce] border-l-8 border-l-[#00647c] rounded-md cursor-pointer shadow ">
                    <div className="flex justify-between items-center mb-3">
                        <div>
                            <h3 className='text-[#121c28] tracking-wider uppercase font-semibold '>Mixer Truck</h3>
                            <p className='text-[#00647c] leading-7 text-[20px] font-semibold mt-1 '>MIX-04</p>
                        </div>
                        <div className="leading-4 font-semibold px-2 py-1 text-[0.75rem] text-[#00647c] bg-[#e5eeff] rounded-md flex items-center gap-1 ">
                            <span className='w-2 h-2 rounded-full inline-block bg-[#00647c] '></span>Actif
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm border-t pt-3">
                        <div className='col-span-2 text-center'>
                            <p className="text-xs">Vitesse</p>
                            <p className="font-semibold">45 km/h</p>
                        </div>
                        <div className='col-span-2 text-center border-t pt-2'>
                            <p className="text-xs">Position Actuelle</p>
                            <p className="font-semibold">Zone C, Nord d'Abidjan</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white border border-[#bdc8ce] border-l-8 border-l-red-800 rounded-md cursor-pointer shadow ">
                    <div className="flex justify-between items-center mb-3">
                        <div>
                            <h3 className='text-[#121c28] tracking-wider uppercase font-semibold '>Generator</h3>
                            <p className='text-red-500 leading-7 text-[20px] font-semibold mt-1 '>Gen-12</p>
                        </div>
                        <div className="leading-4 font-semibold px-2 py-1 text-[0.75rem] text-red-500 bg-red-100 rounded-md flex items-center gap-1 ">
                            <span className='w-2 h-2 rounded-full inline-block bg-red-500 '></span>Alerte
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm border-t pt-3">
                        <div className='col-span-2 text-center'>
                            <p className="text-xs">Vitesse</p>
                            <p className="font-semibold">69 km/h</p>
                        </div>
                        <div className='col-span-2 text-center border-t pt-2'>
                            <p className="text-xs">Position Actuelle</p>
                            <p className="font-semibold">Zone C, Nord d'Abidjan</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white border border-[#bdc8ce] border-l-8 border-l-yellow-500 rounded-md cursor-pointer shadow ">
                    <div className="flex justify-between items-center mb-3">
                        <div>
                            <h3 className='text-[#121c28] tracking-wider uppercase font-semibold '>Mixer Truck</h3>
                            <p className='text-yellow-600 leading-7 text-[20px] font-semibold mt-1 '>MIX-04</p>
                        </div>
                        <div className="leading-4 font-semibold px-2 py-1 text-[0.75rem] text-yellow-600 bg-yellow-100 rounded-md flex items-center gap-1 ">
                            <span className='w-2 h-2 rounded-full inline-block bg-yellow-600 '></span>Actif
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm border-t pt-3">
                        <div className='col-span-2 text-center'>
                            <p className="text-xs">Vitesse</p>
                            <p className="font-semibold">45 km/h</p>
                        </div>
                        <div className='col-span-2 text-center border-t pt-2'>
                            <p className="text-xs">Position Actuelle</p>
                            <p className="font-semibold">Zone C, Nord d'Abidjan</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </aside>
        </>
    )
}