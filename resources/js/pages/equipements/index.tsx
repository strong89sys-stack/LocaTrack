import { router } from "@inertiajs/react"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdPrecisionManufacturing } from "react-icons/md";
import { TbGps } from "react-icons/tb";

import Appareil_List from "./Appareil_List";
import EquipementList from "./Equipement_List";

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
    appareils: Appareil[]
}

export default function Index({ equipements, appareils }: IndexProps){

    const [styles, setStyles] = useState('none')
    const [underline, setUnderline] = useState(false)

    const handleChange = () =>{
        router.visit('/equipements/create-form')
    }

    const AddStyle = () => {

        setStyles('flex')
    }
    const RemoveStyle = () => {

        setStyles('none')
    }

    return(
        <>
        <div className="bg-gray-100">
            <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'ease-out' }} style={{display: styles}} className="fixed inset-0 flex justify-center w-full h-screen backdrop-blur-xl z-10 overflow-hidden">

                <div onClick={RemoveStyle} className="absolute right-20 text-[2rem] top-10 cursor-pointer">x</div>

                <div className="flex items-center justify-center w-full gap-16 text-white text-[2rem] ">
                    <button
                        onClick={() => router.visit('/appareils/create-form')}
                        className="bg-black py-4 px-8 rounded-md uppercase flex items-center gap-4 hover:-translate-y-1 transition-all cursor-pointer ">
                        <span><TbGps /></span>Gps
                    </button>

                    <button onClick={handleChange} className="bg-black py-4 px-8 rounded-md uppercase flex items-center gap-4 hover:-translate-y-1 transition-all cursor-pointer ">
                        <span><MdPrecisionManufacturing /></span>Matériel
                    </button>
                </div>

            </motion.div>

            <div>
                <div className="flex justify-between items-center mt-4 p-6 ">
                    <h1 className="text-4xl font-bold text-[#00647c] ">Gestion du matériel</h1>
                    <div>
                        <button onClick={AddStyle} className="bg-gray-700 py-4 px-6 hover:bg-gray-900 cursor-pointer transition-all ease-in text-white ">Ajouter un nouvel équipement</button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center sticky top-0 z-5 bg-gray-100 backdrop-blur-2xl">
                <div className="w-[90%] flex border-b ">
                    <button
                        onClick={() => {
                            setUnderline(false)
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                        }}
                        className={`
                            w-1/2 pt-10 pb-4 text-xl font-semibold cursor-pointer
                            transition-all duration-200
                            ${
                                !underline
                                    ? 'text-[#00647c] border-b-4 border-[#00647c]'
                                    : 'text-gray-500 border-b-4 border-transparent'
                            }
                        `}
                    >
                        Matériel
                    </button>

                    <button
                        onClick={() => {
                            setUnderline(true)
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                        }}
                        className={`
                            w-1/2 pt-10 pb-4 text-xl font-semibold cursor-pointer
                            transition-all duration-200
                            ${
                                underline
                                    ? 'text-[#00647c] border-b-4 border-[#00647c]'
                                    : 'text-gray-500 border-b-4 border-transparent'
                            }
                        `}
                    >
                        GPS
                    </button>
                </div>
            </div>

            <div className="transition-opacity">
                {!underline ? <EquipementList equipements={equipements} /> : <Appareil_List appareils={appareils} />}
            </div>
        </div>
        </>
    )
}
