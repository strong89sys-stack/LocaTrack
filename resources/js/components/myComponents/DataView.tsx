import { FaCircleDot } from "react-icons/fa6";

interface Position {
    latitude: number;
    longitude: number;
    vitesse: number;
    date_heure: string;
    adresse?: string | null;
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

interface DataViewProps {
    equipements: Equipement[];
}

const statutStyles = {
    "Disponible": {
        text: "text-[#00647c]",
        dot: "bg-[#004e61]",
    },
    "En Location": {
        text: "text-[#00237c]",
        dot: "bg-[#00237c]",
    },
    "En Maintenance": {
        text: "text-[#7c7a00]",
        dot: "bg-[#7c7a00]",
    },
    "Hors Service": {
        text: "text-[#7c0000]",
        dot: "bg-[#7c0000]",
    },
};

export default function DataView({ equipements }: DataViewProps) {
    return (
        <div className="col-span-12 overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b bg-white border-b-[#bdc8ce] flex items-center justify-between shadow mb-2">

                <h3 className="leading-7 font-semibold text-[22px] text-[#121c28]">
                    Activité Récente
                </h3>

                <a
                    href="#"
                    className="text-[#00647c] text-[14px] leading-4 tracking-wider font-bold hover:scale-105 transition-all"
                >
                    Voir tout ...
                </a>

            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full">

                <table className="w-full text-left border-collapse">

                    <thead className="shadow">

                        <tr className="text-[#3e484d] uppercase tracking-wider text-[14px] leading-4 font-semibold">

                            <th className="p-4 py-3">
                                Référence
                            </th>

                            <th className="p-4 py-3">
                                Type
                            </th>

                            <th className="p-4 py-3">
                                Statut
                            </th>

                            <th className="p-4 py-3">
                                Position
                            </th>

                            <th className="p-4 py-3">
                                Batterie
                            </th>

                            <th className="p-4 py-3 text-right">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody className="text-[#121c28] text-[14px] leading-4 font-normal">

                        {equipements.map((item) => {

                            const style =
                                statutStyles[
                                    item.statut.libelle as keyof typeof statutStyles
                                ] ?? {
                                    text: "text-gray-600",
                                    dot: "bg-gray-500",
                                };

                            const batterie =
                                item.appareil?.niveau_batterie ?? 0;

                            return (
                                <tr
                                    key={item.id}
                                    className="bg-[#b7eaff0d] border-b border-[#bdc8ce] hover:bg-[#f8f9ff] transition-colors"
                                >

                                    {/* Référence */}
                                    <td className="p-4 font-bold text-[#00647c]">
                                        {item.reference}
                                    </td>

                                    {/* Type */}
                                    <td className="p-4 font-bold text-[#3e484d]">
                                        {item.marque} - {item.modele}
                                    </td>

                                    {/* Statut */}
                                    <td className="p-4 font-bold">

                                        <div className={`${style.text} flex items-center gap-1`}>

                                            <FaCircleDot
                                                className={`text-[6px] ${style.dot} rounded-full`}
                                            />

                                            {item.statut.libelle}

                                        </div>

                                    </td>

                                    {/* Position */}
                                    <td className="p-4 font-bold text-[#3e484d] max-w-64">
                                        {item.position?.adresse ?? "Position inconnue"}
                                    </td>

                                    {/* Batterie */}
                                    <td className="p-4 font-bold text-[#00647c]">

                                        <div className="flex items-center gap-2">

                                            <div className="w-16 h-1.5 bg-gray-100 overflow-hidden rounded-full">

                                                <div
                                                    className={`h-full rounded-full ${
                                                        batterie <= 20
                                                            ? "bg-red-600"
                                                            : batterie < 50
                                                                ? "bg-yellow-400"
                                                                : "bg-[#00647c]"
                                                    }`}
                                                    style={{
                                                        width: `${batterie}%`,
                                                    }}
                                                />

                                            </div>

                                            <span className="text-[#3e484d] whitespace-nowrap">
                                                {batterie}%
                                            </span>

                                        </div>

                                    </td>

                                    {/* Action */}
                                    <td className="p-4 text-right">

                                        <button
                                            className="text-[#00647c] font-semibold hover:underline cursor-pointer"
                                        >
                                            Voir
                                        </button>

                                    </td>

                                </tr>
                            );
                        })}

                    </tbody>

                </table>

            </div>

        </div>
    );
}