import { useMemo } from "react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LineChart,
    Line,
} from "recharts";


/*
|--------------------------------------------------------------------------
| TYPES
|--------------------------------------------------------------------------
*/

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

interface Position {
    latitude: number;
    longitude: number;
    vitesse: number;
    date_heure: string;
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

interface DashboardChartsProps {
    equipements: Equipement[];
    locationsData: LocationData[];
}


/*
|--------------------------------------------------------------------------
| COULEURS
|--------------------------------------------------------------------------
*/

const COLORS = [
    "#00647c",
    "#2563eb",
    "#eab308",
    "#dc2626",
];


/*
|--------------------------------------------------------------------------
| COMPOSANT
|--------------------------------------------------------------------------
*/

export default function DashboardCharts({
    equipements,
    locationsData,
}: DashboardChartsProps) {


    /*
    |--------------------------------------------------------------------------
    | RÉPARTITION DES STATUTS
    |--------------------------------------------------------------------------
    */

    const statutData = useMemo(() => {

        const stats: Record<string, number> = {};

        equipements.forEach((equipement) => {

            const statut = equipement.statut.libelle;

            stats[statut] = (stats[statut] || 0) + 1;

        });

        return Object.entries(stats).map(([name, value]) => ({
            name,
            value,
        }));

    }, [equipements]);


    /*
    |--------------------------------------------------------------------------
    | ÉTAT DES GPS
    |--------------------------------------------------------------------------
    */

    const gpsData = useMemo(() => {

        let actifs = 0;
        let inactifs = 0;
        let sansAppareil = 0;

        equipements.forEach((equipement) => {

            if (!equipement.appareil) {

                sansAppareil++;

                return;
            }

            if (equipement.appareil.statut === "Actif") {

                actifs++;

            } else {

                inactifs++;

            }

        });

        return [
            {
                name: "Actifs",
                value: actifs,
            },
            {
                name: "Inactifs",
                value: inactifs,
            },
            {
                name: "Sans GPS",
                value: sansAppareil,
            },
        ];

    }, [equipements]);


    /*
    |--------------------------------------------------------------------------
    | BATTERIES
    |--------------------------------------------------------------------------
    */

    const batteryData = useMemo(() => {

        return equipements
            .filter((equipement) => equipement.appareil)
            .map((equipement) => ({
                name: equipement.reference,
                batterie: equipement.appareil?.niveau_batterie ?? 0,
            }));

    }, [equipements]);


    /*
    |--------------------------------------------------------------------------
    | AFFICHAGE
    |--------------------------------------------------------------------------
    */

    return (

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">


            {/* =========================================================
                ÉTAT DU PARC
            ========================================================= */}

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xl:col-span-4">

                <div className="mb-4">

                    <h3 className="text-lg font-semibold text-[#121c28]">
                        État du parc
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        Répartition des équipements
                    </p>

                </div>


                <div className="h-[280px]">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <PieChart>

                            <Pie
                                data={statutData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={105}
                                paddingAngle={3}
                                dataKey="value"
                            >

                                {statutData.map((_, index) => (

                                    <Cell
                                        key={index}
                                        fill={
                                            COLORS[
                                                index % COLORS.length
                                            ]
                                        }
                                    />

                                ))}

                            </Pie>


                            <Tooltip />


                            <Legend
                                verticalAlign="bottom"
                                height={36}
                            />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            </div>


            {/* =========================================================
                ACTIVITÉ DES LOCATIONS
            ========================================================= */}

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xl:col-span-8">

                <div className="mb-4">

                    <h3 className="text-lg font-semibold text-[#121c28]">
                        Activité des locations
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        Nombre de locations sur les 7 derniers jours
                    </p>

                </div>


                <div className="h-[280px]">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <LineChart data={locationsData}>

                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />


                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                            />


                            <YAxis
                                allowDecimals={false}
                                axisLine={false}
                                tickLine={false}
                            />


                            <Tooltip />


                            <Line
                                type="monotone"
                                dataKey="locations"
                                stroke="#00647c"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />

                        </LineChart>

                    </ResponsiveContainer>

                </div>

            </div>


            {/* =========================================================
                ÉTAT GPS
            ========================================================= */}

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xl:col-span-6">

                <div className="mb-4">

                    <h3 className="text-lg font-semibold text-[#121c28]">
                        État des appareils GPS
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        État actuel des trackers
                    </p>

                </div>


                <div className="h-[260px]">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart data={gpsData}>

                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />


                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                            />


                            <YAxis
                                allowDecimals={false}
                                axisLine={false}
                                tickLine={false}
                            />


                            <Tooltip />


                            <Bar
                                dataKey="value"
                                fill="#00647c"
                                radius={[6, 6, 0, 0]}
                                barSize={45}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>


            {/* =========================================================
                BATTERIE
            ========================================================= */}

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xl:col-span-6">

                <div className="mb-4">

                    <h3 className="text-lg font-semibold text-[#121c28]">
                        Niveau des batteries
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        Niveau de batterie des appareils connectés
                    </p>

                </div>


                <div className="h-[260px]">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart
                            data={batteryData}
                            layout="vertical"
                            margin={{
                                left: 10,
                                right: 20,
                            }}
                        >

                            <CartesianGrid
                                strokeDasharray="3 3"
                                horizontal={false}
                            />


                            <XAxis
                                type="number"
                                domain={[0, 100]}
                                axisLine={false}
                                tickLine={false}
                            />


                            <YAxis
                                dataKey="name"
                                type="category"
                                width={70}
                                axisLine={false}
                                tickLine={false}
                            />


                            <Tooltip />


                            <Bar
                                dataKey="batterie"
                                fill="#00647c"
                                radius={[0, 6, 6, 0]}
                                barSize={18}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
}