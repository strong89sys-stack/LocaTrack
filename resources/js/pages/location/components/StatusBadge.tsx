

export default function StatusBadge({
    status,
}: {
    status: Rental["status"];
}) {
    const styles = {
        Active: "bg-white text-[#08758d]",
        Completed: "bg-white text-gray-700",
        Overdue: "bg-red-100 text-red-700",
    };

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
                ${styles[status]}
            `}
        >
            <span
                className={`
                    h-2
                    w-2
                    rounded-full
                    ${
                        status === "Overdue"
                            ? "bg-red-600"
                            : "bg-[#08758d]"
                    }
                `}
            />

            {status}
        </div>
    );
}
