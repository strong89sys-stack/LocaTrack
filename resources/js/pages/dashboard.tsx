import { Head } from '@inertiajs/react';
// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { VscDebugRestart } from "react-icons/vsc";
import DataView from '@/components/myComponents/DataView';
import EquipementSelected from '@/components/myComponents/EquipementSelected';
import InfoCard from '@/components/myComponents/InfoCard';
import MapCard from '@/components/myComponents/MapCard';


import { dashboard } from '@/routes';

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

interface DashboardProps{
    equipements: Equipement[]
    alertesActives: number
}

export default function Dashboard({ equipements, alertesActives }: DashboardProps) {
    return (
        <>
            <Head title="Dashboard" />
            <main className='p-6 m-0'>
                <div className='mx-auto max-w-360 '>
                    <div className='flex justify-between items-end' style={{ color: 'rgba(18, 28, 40, 1)', }}>
                        <div>
                            <h2 className='mb-1 text-[28px] leading-9 font-semibold tracking-[-0.01em] '>
                                Tableau de Bord
                            </h2>
                            <p style={{ color: 'rgba(62, 72, 77, 1)', fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}>
                                Surveillance et analyse en temps réel.
                            </p>
                        </div>
                        <div className='flex items-center font-sans bg-white border rounded-md gap-1' style={{ color: '#3e484d', fontSize: '12px', lineHeight: '16px', letterSpacing: '0.05em', fontWeight: 600, padding: '0.375rem 0.75rem'}}>
                            <span><VscDebugRestart /></span>
                            Mis à jour à l'instant
                        </div>
                    </div>

                    <div className='grid grid-cols-12 mt-6 gap-6'>
                        <InfoCard equipements={equipements} alertesActives={alertesActives} />
                        <MapCard equipements={equipements} />
                        <EquipementSelected />
                        <DataView equipements={equipements} />
                    </div>
                </div>
            </main>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: '',
            href: dashboard(),
        },
    ],
};
