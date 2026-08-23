import { FiSearch } from "react-icons/fi";

interface LocationSearchProps {
    search: string;
    setSearch: (value: string) => void;
}

export default function LocationSearch({
    search,
    setSearch
}: LocationSearchProps) {

    return (
        <div className="relative w-full sm:w-[350px]">

            <FiSearch
                size={20}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                "
            />

            <input
                type="text"
                placeholder="Rechercher une location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                    w-full
                    rounded-xl
                    border
                    border-[#cbd5e1]
                    bg-white
                    py-3
                    pl-12
                    pr-4
                    text-sm
                    outline-none
                    transition
                    focus:border-[#00647c]
                    focus:ring-2
                    focus:ring-[#00647c]/10
                "
            />

        </div>
    );
}
