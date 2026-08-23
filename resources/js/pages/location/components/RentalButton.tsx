import { router } from "@inertiajs/react"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoMdPersonAdd } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

export default function RentalButton(){

    const [styles, setStyles] = useState('none')
    // const [underline, setUnderline] = useState(false)
    
    const handleChange = () =>{
        router.visit('/locations/form')
    }
    
    const AddStyle = () => {
    
        setStyles('flex')
    }
    const RemoveStyle = () => {
    
        setStyles('none')
    }

    return (
        <>
            <div>
                <motion.div 
                    initial={{opacity: 0}} 
                    whileInView={{ opacity: 1 }} 
                    style={{display: styles}} 
                    className="
                        fixed 
                        inset-0 
                        flex 
                        justify-center 
                        w-full 
                        h-screen 
                        backdrop-blur-xl 
                        z-10 
                        overflow-hidden
                        transition-all
                    "
                >
                
                    <div onClick={RemoveStyle} className="absolute right-20 text-[2rem] top-10 cursor-pointer">x</div>
                
                    <div className="flex items-center justify-center w-full gap-16 text-white text-[1.5rem] ">
                        <button
                            onClick={() => router.visit('/clients/form')}
                            className="bg-black py-4 px-8 rounded-md uppercase flex items-center gap-4 hover:-translate-y-1 transition-all cursor-pointer ">
                            <span><IoMdPersonAdd /></span>Nouveau Client
                        </button>
                
                        <button onClick={handleChange} className="bg-black py-4 px-8 rounded-md uppercase flex items-center gap-4 hover:-translate-y-1 transition-all cursor-pointer ">
                            <span><IoPerson /></span>Client Existant
                        </button>
                    </div>
                
                </motion.div>
                <div>
                    <button 
                        onClick={AddStyle}
                        className="
                            bg-gray-700 
                            py-4 
                            px-6 
                            hover:bg-gray-900 
                            cursor-pointer 
                            transition-all 
                            ease-in 
                            text-white 
                            rounded-md
                        "
                    >
                        Créer un contrat de location
                    </button>
                </div>
            </div>
        </>
    )
}