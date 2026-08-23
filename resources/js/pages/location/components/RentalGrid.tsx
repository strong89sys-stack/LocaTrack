import type { Location } from "../Location";
import RentalCard from "./RentalCard";

interface RentalGridProps {
    locations: Location[];
}

export default function RentalGrid({
    locations,
}: RentalGridProps) {

    return (
        <div
            className="
                mt-7
                grid
                grid-cols-1
                gap-7
                md:grid-cols-2
                xl:grid-cols-3
            "
        >
            {locations.map((location) => (
                <RentalCard
                    key={location.id}
                    location={location}
                />
            ))}
        </div>
    );
}
