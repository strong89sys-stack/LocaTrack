interface RentalStatusBadgeProps {
    status: string;
}

export default function RentalStatusBadge({
    status,
}: RentalStatusBadgeProps) {

    const isOverdue = status === "expiré";

    const label =
        status === "en_cours"
            ? "En cours"
            : "Expiré";

    return (
        <div
            className={`
                absolute
                right-4
                top-4
                flex
                items-center
                gap-2
                rounded-md
                px-3
                py-1.5
                text-sm
                font-bold
                shadow-sm

                ${
                    isOverdue
                        ? "bg-red-100 text-red-700"
                        : "bg-white text-[#08758d]"
                }
            `}
        >

            <span
                className={`
                    h-2
                    w-2
                    rounded-full

                    ${
                        isOverdue
                            ? "bg-red-600"
                            : "bg-[#08758d]"
                    }
                `}
            />

            {label}

        </div>
    );
}
