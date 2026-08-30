import { Head } from "@inertiajs/react";
import { VscDebugRestart } from "react-icons/vsc";

import DashboardCharts from "@/components/myComponents/DashboardCharts";
import InfoCard from "@/components/myComponents/InfoCard";

import { dashboard } from "@/routes";


/*
|--------------------------------------------------------------------------
| TYPES
|--------------------------------------------------------------------------
*/

interface Position {
    latitude: number;
    longitude: number;
    vitesse: number;
    date_heure: string;
}


interface Appareil {
    id: number;
    imei: string;
    numero_sim: string;
    niveau_batterie: number;
    statut: string;
}


interface Statut {
    id: number;
    libelle: string;
}


interface Equipement {
    id: number;
    reference: string;
    marque: string;
    modele: string;
    statut_id: number;
    statut: Statut;
    image: string;
    appareil: Appareil | null;
    position: Position | null;
}


interface LocationData {
    name: string;
    locations: number;
}


interface DashboardProps {
    equipements: Equipement[];
    alertesActives: number;
    locationsData: LocationData[];
}


/*
|--------------------------------------------------------------------------
| DASHBOARD
|--------------------------------------------------------------------------
*/

export default function Dashboard({
    equipements,
    alertesActives,
    locationsData,
}: DashboardProps) {

    return (

        <>

            <Head title="Dashboard" />


            <main className="min-h-screen bg-[#f6f8fd] p-4 sm:p-6">

                <div className="mx-auto max-w-[1600px]">


                    {/* =====================================================
                        HEADER
                    ===================================================== */}

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <h2 className="mb-1 text-2xl font-semibold tracking-tight text-[#121c28] sm:text-[28px]">
                                Tableau de Bord
                            </h2>


                            <p className="text-sm text-[#3e484d]">
                                Surveillance et analyse en temps réel.
                            </p>

                        </div>


                        <div className="flex w-fit items-center gap-1 rounded-md border bg-white px-3 py-1.5 text-xs font-semibold tracking-wider text-[#3e484d]">

                            <VscDebugRestart />

                            Mis à jour à l'instant

                        </div>

                    </div>


                    {/* =====================================================
                        INFORMATIONS
                    ===================================================== */}

                    <div className="mt-6">

                        <InfoCard
                            equipements={equipements}
                            alertesActives={alertesActives}
                        />

                    </div>


                    {/* =====================================================
                        CHARTS
                    ===================================================== */}

                    <DashboardCharts
                        equipements={equipements}
                        locationsData={locationsData}
                    />


                </div>

            </main>

        </>

    );
}


/*
|--------------------------------------------------------------------------
| LAYOUT
|--------------------------------------------------------------------------
*/

Dashboard.layout = {

    breadcrumbs: [

        {
            title: "",
            href: dashboard(),
        },

    ],

};