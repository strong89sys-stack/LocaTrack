import { useMemo, useState } from "react";
import LocationFilters from "./components/LocationFilters";
import LocationSearch from "./components/LocationSearch";
import RentalButton from "./components/RentalButton";
import RentalGrid from "./components/RentalGrid";

interface Client {
    id: number;
    nom: string;
    prenoms: string;
    telephone: string;
    email: string;
    adresse: string;
}

interface Equipement {
    id: number;
    reference: string;
    marque: string;
    modele: string;
    statut_id: number;
    image: string;
}

interface ZoneGeofence {
    id: number;
    nom: string;
    centre: number;
    rayon: number;
    tolerance: number;
}

export interface Location {
    id: number;

    client_id: number;
    equipement_id: number;
    zone_geofence_id: number | null;

    date_debut: string;
    date_fin: string;
    statut: string;

    client: Client;
    equipement: Equipement;
    zone_geofence: ZoneGeofence | null;
}

interface LocationProps {
    locations: Location[];
}

export default function Location({
    locations,
}: LocationProps) {
    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState<Location["statut"]>("en_cours");

    const [sortAsc, setSortAsc] = useState(true);

    const filteredLocations = useMemo(() => {
        let result = locations.filter(
            (location) => location.statut === statusFilter
        );

        if (search.trim()) {
            const query = search.toLowerCase().trim();

            result = result.filter((location) => {
                const clientName =
                    `${location.client.nom} ${location.client.prenoms}`
                        .toLowerCase();

                const equipment =
                    `${location.equipement.marque} ${location.equipement.modele} ${location.equipement.reference}`
                        .toLowerCase();

                const zone =
                    location.zone_geofence?.nom.toLowerCase() ?? "";

                return (
                    clientName.includes(query) ||
                    equipment.includes(query) ||
                    zone.includes(query)
                );
            });
        }

        return [...result].sort((a, b) => {
            return sortAsc
                ? a.date_debut.localeCompare(b.date_debut)
                : b.date_debut.localeCompare(a.date_debut);
        });
    }, [
        locations,
        search,
        statusFilter,
        sortAsc,
    ]);

    return (
        <div className="min-h-screen bg-[#f6f8fd] px-6 py-8">

            <div className="relative flex items-center justify-between">
                <LocationSearch
                    search={search}
                    setSearch={setSearch}
                />

                <RentalButton />
            </div>

            <LocationFilters
                status={statusFilter}
                setStatus={setStatusFilter}
                sortAsc={sortAsc}
                setSortAsc={setSortAsc}
            />

            {filteredLocations.length > 0 && (
                <RentalGrid
                    locations={filteredLocations}
                />
            )}

            {filteredLocations.length === 0 && (
                <div className="flex min-h-87.5 items-center justify-center">
                    <div className="text-center">
                        <div className="text-lg font-semibold text-gray-700">
                            Aucune location trouvée
                        </div>

                        <p className="mt-2 text-sm text-gray-500">
                            Essaie une autre recherche ou un autre statut.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}