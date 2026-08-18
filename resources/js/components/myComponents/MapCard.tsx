import { MdOutlineFilterList } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
}


export default function MapCard({ equipements }: MapProps){
    return (
        <>
        <div className="flex flex-col overflow-hidden relative col-span-8 bg-white h-125">
            <div className="p-4 border rounded-md border-b-[#bdc8ce] flex justify-between items-center z-10 mb-2 shadow">
                <h3 className="text-[#121c28] text-[20px] leading-7 font-semibold">
                    Suivi en temps réel
                </h3>
                <div className="flex gap-2">
                    <button className="text-[#3e484d] p-1.5 bg-[#e5eeff] cursor-pointer rounded-md"><MdOutlineFilterList /></button>
                    <button className="text-[#3e484d] p-1.5 bg-[#e5eeff] cursor-pointer rounded-md"><MdFullscreen /></button>
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
