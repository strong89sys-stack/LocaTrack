interface RentalProgressProps {
    progress: number;
    overdue?: boolean;
}

export default function RentalProgress({
    progress,
    overdue = false,
}: RentalProgressProps) {

    const percentage = Math.min(
        Math.max(progress, 0),
        100
    );

    return (
        <div className="mt-7">

            <div
                className="
                    mb-2
                    flex
                    items-center
                    justify-between
                "
            >

                <span
                    className="
                        text-sm
                        font-semibold
                        text-gray-600
                    "
                >
                    Temps écoulé
                </span>

                <span
                    className={`
                        text-sm
                        font-semibold

                        ${
                            overdue
                                ? "text-red-600"
                                : "text-gray-600"
                        }
                    `}
                >
                    {Math.round(percentage)}%
                </span>

            </div>


            <div
                className="
                    h-2.5
                    overflow-hidden
                    rounded-full
                    bg-gray-200
                "
            >

                <div
                    className={`
                        h-full
                        rounded-full
                        transition-all
                        duration-700

                        ${
                            overdue
                                ? "bg-red-600"
                                : "bg-[#0796b5]"
                        }
                    `}
                    style={{
                        width: `${percentage}%`,
                    }}
                />

            </div>

        </div>
    );
}
