import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { FiMapPin, FiPlus, FiSearch } from "react-icons/fi";

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

export default function Location({ locations }: LocationProps) {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<Location["statut"]>("en_cours");
    const [sortAsc, setSortAsc] = useState(true);

    const filteredLocations = useMemo(() => {
        let result = locations.filter(
            (location) => location.statut === statusFilter
        );

        if (search.trim()) {
            const query = search.toLowerCase().trim();

            result = result.filter((location) => {
                const clientName = `${location.client.nom} ${location.client.prenoms}`.toLowerCase();

                const equipment = `${location.equipement.marque} ${location.equipement.modele} ${location.equipement.reference}`.toLowerCase();

                const zone = location.zone_geofence?.nom.toLowerCase() ?? "";

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
    }, [locations, search, statusFilter, sortAsc]);

    return (
        <div className="min-h-screen bg-[#f6f8fd]">
            <div className="mx-auto max-w-[1600px] px-6 py-8">

                {/* HEADER */}
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                        <div>
                            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#00647c]">
                                <FiMapPin className="text-base" />
                                Gestion des locations
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight text-[#121c28] md:text-4xl">
                                Locations
                            </h1>

                            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
                                Consultez, recherchez et gérez les locations de vos équipements depuis un seul espace.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm sm:block">
                                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                    Locations affichées
                                </p>

                                <p className="mt-1 text-xl font-bold text-[#121c28]">
                                    {filteredLocations.length}
                                </p>
                            </div>

                            <RentalButton />
                        </div>
                    </div>
                </motion.div>

                {/* BARRE DE RECHERCHE */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

                        <div className="flex-1">
                            <LocationSearch search={search} setSearch={setSearch} />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <FiSearch />
                            <span>Recherche client, équipement ou zone</span>
                        </div>
                    </div>
                </motion.div>

                {/* FILTRES */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="mb-8">
                    <LocationFilters status={statusFilter} setStatus={setStatusFilter} sortAsc={sortAsc} setSortAsc={setSortAsc} />
                </motion.div>

                {/* CONTENU */}
                <AnimatePresence mode="wait">
                    {filteredLocations.length > 0 ? (
                        <motion.div key="locations" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                            <div className="mb-5 flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-bold text-[#121c28]">
                                        Locations
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        {filteredLocations.length} location{filteredLocations.length > 1 ? "s" : ""} correspondant à vos critères.
                                    </p>
                                </div>

                                {search && (
                                    <button type="button" onClick={() => setSearch("")} className="rounded-lg px-3 py-2 text-sm font-medium text-[#00647c] transition hover:bg-[#00647c]/5">
                                        Effacer la recherche
                                    </button>
                                )}
                            </div>

                            <RentalGrid locations={filteredLocations} />
                        </motion.div>
                    ) : (
                        <motion.div key="empty" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="flex min-h-[420px] items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white">
                            <div className="max-w-md px-6 text-center">

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00647c]/10 text-2xl text-[#00647c]">
                                    <FiMapPin />
                                </div>

                                <h2 className="mt-5 text-xl font-bold text-[#121c28]">
                                    Aucune location trouvée
                                </h2>

                                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                    Aucune location ne correspond actuellement à votre recherche ou au statut sélectionné.
                                </p>

                                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                    {search && (
                                        <button type="button" onClick={() => setSearch("")} className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
                                            Effacer la recherche
                                        </button>
                                    )}

                                    {/* <button type="button" onClick={() => setStatusFilter("en_cours")} className="inline-flex items-center gap-2 rounded-xl bg-[#00647c] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00566a] hover:shadow-md">
                                        <FiPlus />
                                        Voir les locations en cours
                                    </button> */}
                                    <RentalButton />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}