import { MdOutlineFilterList } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useState, useEffect } from "react";

interface MapControllerProps {
    position: [number, number] | null
}

function MapController({ position }: MapControllerProps) {
    const map = useMap()

    useEffect(() => {
        if (!position) {
            return
        }

        map.flyTo(position, 16, {
            duration: 1
        })
    }, [position, map])

    return null
}

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

interface MapProps{
    equipements: Equipement[]
    selectedPosition: [number, number] | null
}


export default function MapCard({ equipements, selectedPosition }: MapProps){

    const isOffline = (item: Equipement) => {
        if(!item.position?.date_heure){
            return true
        }

        const lastPosition = new Date(item.position.date_heure).getTime()
        const now = Date.now()
        const elapsed_time = 5 * 60 * 1000

        return now - lastPosition > elapsed_time
    }

    const createMarkerIcon = (
        reference: string,
        offline: boolean
    ) => {

        const color = offline ? '#ef4444' : '#00647c'

        return L.divIcon({
            className: '',
            html: `
                <div
                    style="
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: max-content;
                        transform: translateX(-50%);
                    "
                >

                    <div
                        style="
                            margin-bottom: 4px;
                            padding: 3px 7px;
                            background: white;
                            border: 1px solid #d1d5db;
                            border-radius: 5px;
                            color: #121c28;
                            font-size: 11px;
                            font-weight: 700;
                            white-space: nowrap;
                            box-shadow: 0 2px 6px rgba(0,0,0,0.15);
                        "
                    >
                        ${reference}
                    </div>

                    <div
                        style="
                            position: relative;
                            width: 20px;
                            height: 20px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        "
                    >

                        <div
                            style="
                                position: absolute;
                                width: 20px;
                                height: 20px;
                                border-radius: 50%;
                                background: ${color};
                                opacity: 0.20;
                                animation: markerPulse 1.8s infinite;
                            "
                        ></div>

                        <div
                            style="
                                position: relative;
                                width: 9px;
                                height: 9px;
                                border-radius: 50%;
                                background: ${color};
                                border: 2px solid white;
                                box-shadow: 0 1px 4px rgba(0,0,0,0.35);
                            "
                        ></div>

                    </div>

                </div>
            `,
            iconSize: [0, 0],
            iconAnchor: [0, 0],
            popupAnchor: [0, -28],
        })
    }

    return (
        <>
        <div className="flex flex-col overflow-hidden relative col-span-9 bg-white h-screen border">
            <div className="p-4 border rounded-md border-b-[#bdc8ce] flex items-center z-10 mb-2 gap-2 shadow">
                <button className="text-[121c28] py-2 px-3 bg-white border gap-2 flex items-center cursor-pointer rounded-md ">
                    <span className="text-[#00647c] "><MdOutlineFilterList /></span>
                    <span className="text-[16px] leading-4 tracking-wider font-semibold ">Filtrer</span>
                </button>
                <div className="flex rounded-lg shadow bg-white">
                    <button className="text-[#121c28] py-2 px-3 rounded-l-lg cursor-pointer border bg-[#d9dff5] ">Tout</button>
                    <button className="text-[#121c28] py-2 px-3 bg-inherit cursor-pointer border">Actifs</button>
                    <button className="text-red-700 py-2 px-3 bg-inherit rounded-r-lg cursor-pointer border">Alertes</button>
                </div>
            </div>

            <div className="w-full flex-1 relative">
                <MapContainer
                    center={[5.3364, -4.0267]}
                    zoom={12}
                    className="w-full h-full"
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <MapController position={selectedPosition} />

                    {equipements.map((equipement) => {

                        if (!equipement.position){
                            return null
                        }

                        return (
                            <Marker
                                key={equipement.id}
                                position={[
                                    equipement.position.latitude,
                                    equipement.position.longitude
                                ]}
                                icon={createMarkerIcon(
                                    equipement.reference,
                                    isOffline(equipement)
                                )}
                            >
                                <Popup>
                                    <strong>{equipement.reference}</strong>
                                    <br />
                                    {equipement.marque} - {equipement.modele}
                                    <br />
                                    Batterie : {equipement.appareil?.niveau_batterie}%
                                    <br />
                                    Vitesse : {equipement.position.vitesse} km/h
                                </Popup>
                            </Marker>
                        )
                    })}
                </MapContainer>
            </div>
        </div>
        </>
    )
}
