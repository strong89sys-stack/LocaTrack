import { FiSliders, FiList } from "react-icons/fi";
import type { Location } from "../Location";

type Status = "en_cours" | "expiré";

interface LocationFiltersProps {
    status: Location["statut"];
    setStatus: (status: Location["statut"]) => void;

    sortAsc: boolean;
    setSortAsc: (value: boolean) => void;
}

export default function LocationFilters({
    status,
    setStatus,
    sortAsc,
    setSortAsc,
}: LocationFiltersProps) {

    const statuses: Status[] = [
        "en_cours",
        "expiré",
    ];

    return (
        <div
            className="
                mt-5
                flex
                flex-col
                gap-4
                lg:flex-row
                lg:items-center
                lg:justify-between
            "
        >

            {/* Gauche */}

            <div className="flex flex-wrap gap-3">

                <button
                    type="button"
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-border
                        bg-background
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-foreground
                        transition
                        hover:bg-background/50
                    "
                >
                    <FiSliders size={18} />
                    Filter
                </button>

                <button
                    type="button"
                    onClick={() => setSortAsc(!sortAsc)}
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-border
                        bg-background
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-foreground
                        transition
                        hover:bg-background/50
                    "
                >
                    <FiList size={18} />
                    Trier Par: Date
                </button>

            </div>

            {/* Statuts */}

            <div
                className="
                    flex
                    w-fit
                    items-center
                    rounded-xl
                    border
                    border-border
                    bg-background
                    p-1
                "
            >

                {statuses.map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setStatus(item)}
                        className={`
                            rounded-lg
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            transition-all

                            ${
                                status === item
                                    ? "bg-[#00647c] text-white shadow-sm"
                                    : "text-[#334155] hover:text-[#00647c]"
                            }
                        `}
                    >
                        {item === "en_cours"
                            ? "En cours"
                            : "Expiré"}
                    </button>
                ))}

            </div>

        </div>
    );
}
