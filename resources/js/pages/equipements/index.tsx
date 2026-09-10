import { router } from "@inertiajs/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdPrecisionManufacturing } from "react-icons/md";
import { TbGps } from "react-icons/tb";
import { FiPlus, FiX, FiChevronRight } from "react-icons/fi";

import Appareil_List from "./Appareil_List";
import EquipementList from "./Equipement_List";

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

interface IndexProps {
    equipements: Equipement[];
    appareils: Appareil[];
}

export default function Index({ equipements, appareils }: IndexProps) {
    const [activeTab, setActiveTab] = useState<"equipements" | "appareils">("equipements");
    const [showModal, setShowModal] = useState(false);

    const handleTabChange = (tab: "equipements" | "appareils") => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleAddEquipement = () => {
        setShowModal(false);
        router.visit("/equipements/create-form");
    };

    const handleAddAppareil = () => {
        setShowModal(false);
        router.visit("/appareils/create-form");
    };

    return (
        <div className="min-h-screen bg-background">

            {/* HEADER */}
            <header className="border-b border-border bg-transparent">
                <div className="mx-auto max-w-[1600px] px-6 py-7">

                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                        <div>
                            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-[#00647c]">
                                <MdPrecisionManufacturing className="text-lg" />
                                Gestion du parc
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                                Matériel & GPS
                            </h1>

                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
                                Gérez vos équipements et leurs appareils de géolocalisation depuis un seul espace.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowModal(true)}
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00647c] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00566a] hover:shadow-lg"
                        >
                            <FiPlus className="text-lg transition-transform duration-200 group-hover:rotate-90" />
                            Ajouter
                        </button>

                    </div>

                    {/* STATISTIQUES */}
                    <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">

                        <div className="flex items-center justify-between rounded-2xl border-2 border-border bg-background p-5 transition-all duration-200 hover:border-[#00647c]/20 hover:bg-background/50 hover:shadow-sm">
                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00647c]/10 text-xl text-[#00647c]">
                                    <MdPrecisionManufacturing />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                        Équipements
                                    </p>

                                    <p className="mt-1 text-2xl font-bold text-foreground">
                                        {equipements.length}
                                    </p>
                                </div>

                            </div>

                            <FiChevronRight className="text-gray-300" />
                        </div>

                        <div className="flex items-center justify-between rounded-2xl border-2 border-border bg-background p-5 transition-all duration-200 hover:border-[#00647c]/20 hover:bg-background/50 hover:shadow-sm">
                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00647c]/10 text-2xl text-[#00647c]">
                                    <TbGps />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                        Appareils GPS
                                    </p>

                                    <p className="mt-1 text-2xl font-bold text-foreground">
                                        {appareils.length}
                                    </p>
                                </div>

                            </div>

                            <FiChevronRight className="text-gray-300" />
                        </div>

                    </div>

                </div>
            </header>

            {/* NAVIGATION */}
            <nav className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-xl">
                <div className="mx-auto max-w-[1600px] px-6">
                    <div className="flex gap-8">

                        <button
                            type="button"
                            onClick={() => handleTabChange("equipements")}
                            className={`relative flex items-center gap-2 py-4 text-sm font-semibold transition-colors ${activeTab === "equipements" ? "text-[#00647c]" : "text-gray-400 hover:text-gray-700"}`}
                        >
                            <MdPrecisionManufacturing className="text-lg" />
                            Matériel

                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-bold text-gray-500">
                                {equipements.length}
                            </span>

                            {activeTab === "equipements" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#00647c]"
                                />
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={() => handleTabChange("appareils")}
                            className={`relative flex items-center gap-2 py-4 text-sm font-semibold transition-colors ${activeTab === "appareils" ? "text-[#00647c]" : "text-gray-400 hover:text-gray-700"}`}
                        >
                            <TbGps className="text-xl" />
                            GPS

                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-bold text-gray-500">
                                {appareils.length}
                            </span>

                            {activeTab === "appareils" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#00647c]"
                                />
                            )}
                        </button>

                    </div>
                </div>
            </nav>

            {/* CONTENU */}
            <main className="mx-auto max-w-[1600px] px-6 py-8">

                <AnimatePresence mode="wait">

                    {activeTab === "equipements" ? (
                        <motion.div
                            key="equipements"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <EquipementList equipements={equipements} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="appareils"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <Appareil_List appareils={appareils} />
                        </motion.div>
                    )}

                </AnimatePresence>

            </main>

            {/* MODALE */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="w-full max-w-lg overflow-hidden rounded-3xl bg-background shadow-2xl"
                        >

                            {/* HEADER MODALE */}
                            <div className="flex items-center justify-between border-b border-border px-6 py-5">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-[#00647c]">
                                        Nouveau
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-foreground">
                                        Ajouter au parc
                                    </h2>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <FiX className="text-xl" />
                                </button>

                            </div>

                            {/* OPTIONS */}
                            <div className="grid gap-4 p-6 sm:grid-cols-2">

                                {/* GPS */}
                                <button
                                    type="button"
                                    onClick={handleAddAppareil}
                                    className="group rounded-2xl border border-border p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-[#00647c]/30 hover:shadow-lg"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00647c]/10 text-2xl text-[#00647c]">
                                        <TbGps />
                                    </div>

                                    <h3 className="font-bold text-foreground">
                                        Appareil GPS
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                                        Ajouter un nouveau tracker GPS à votre parc.
                                    </p>

                                    <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#00647c]">
                                        Ajouter
                                        <FiChevronRight className="transition-transform duration-200 group-hover:translate-x-1" />
                                    </div>
                                </button>

                                {/* ÉQUIPEMENT */}
                                <button
                                    type="button"
                                    onClick={handleAddEquipement}
                                    className="group rounded-2xl border border-border p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-[#00647c]/30 hover:shadow-lg"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00647c]/10 text-xl text-[#00647c]">
                                        <MdPrecisionManufacturing />
                                    </div>

                                    <h3 className="font-bold text-foreground">
                                        Équipement
                                    </h3>

                                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                                        Ajouter un nouvel équipement de chantier.
                                    </p>

                                    <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#00647c]">
                                        Ajouter
                                        <FiChevronRight className="transition-transform duration-200 group-hover:translate-x-1" />
                                    </div>
                                </button>

                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}