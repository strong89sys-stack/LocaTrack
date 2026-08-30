import { router } from "@inertiajs/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiX, FiChevronRight } from "react-icons/fi";
import { IoMdPersonAdd } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

export default function RentalButton() {
    const [showModal, setShowModal] = useState(false);

    const handleNewClient = () => {
        router.visit("/clients/form");
    };

    const handleExistingClient = () => {
        router.visit("/locations/form");
    };

    return (
        <>
            {/* BOUTON PRINCIPAL */}
            <button
                type="button"
                onClick={() => setShowModal(true)}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#00647c] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00566a] hover:shadow-lg"
            >
                <FiPlus className="text-lg transition-transform duration-200 group-hover:rotate-90" />
                Créer un contrat
            </button>

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
                            onClick={(event) => event.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
                        >
                            {/* HEADER */}
                            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-[#00647c]">
                                        Nouvelle location
                                    </p>

                                    <h2 className="mt-1 text-xl font-bold text-[#121c28]">
                                        Créer un contrat
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Sélectionnez le type de client à utiliser.
                                    </p>
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
                                {/* NOUVEAU CLIENT */}
                                <button
                                    type="button"
                                    onClick={handleNewClient}
                                    className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-[#00647c]/30 hover:shadow-lg"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00647c]/10 text-2xl text-[#00647c]">
                                        <IoMdPersonAdd />
                                    </div>

                                    <h3 className="font-bold text-[#121c28]">
                                        Nouveau client
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                        Enregistrer un nouveau client avant de créer son contrat de location.
                                    </p>

                                    <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#00647c]">
                                        Continuer
                                        <FiChevronRight className="transition-transform duration-200 group-hover:translate-x-1" />
                                    </div>
                                </button>

                                {/* CLIENT EXISTANT */}
                                <button
                                    type="button"
                                    onClick={handleExistingClient}
                                    className="group rounded-2xl border border-gray-200 bg-white p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-[#00647c]/30 hover:shadow-lg"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00647c]/10 text-2xl text-[#00647c]">
                                        <IoPerson />
                                    </div>

                                    <h3 className="font-bold text-[#121c28]">
                                        Client existant
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                        Sélectionner un client déjà enregistré pour créer une nouvelle location.
                                    </p>

                                    <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#00647c]">
                                        Continuer
                                        <FiChevronRight className="transition-transform duration-200 group-hover:translate-x-1" />
                                    </div>
                                </button>
                            </div>

                            {/* FOOTER */}
                            <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
                                <p className="text-center text-xs text-gray-400">
                                    Vous pourrez sélectionner l'équipement et définir les dates de location à l'étape suivante.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}