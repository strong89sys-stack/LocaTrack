import Aside from "@/components/myComponents/live_tracking_components/Aside";
import MapCard from "@/components/myComponents/live_tracking_components/MapCard";
import { useState } from "react";

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

interface TrackingProps{
    equipements: Equipement[]
}

export default function Live_Tracking({equipements}: TrackingProps){

    const [selectedPosition, setSelectedPosition] = useState<[number, number] | null>(null)

    return (
        <>
        <div className="grid grid-cols-12 h-screen">
            <MapCard 
                equipements={equipements} 
                selectedPosition={selectedPosition}
            />

            <Aside 
                equipements={equipements} 
                onSelect={setSelectedPosition}
            />
        </div>
        </>
    )
}
