interface RentalInfoRowProps {
    icon: React.ReactNode;
    text: string;
    danger?: boolean;
}

export default function RentalInfoRow({
    icon,
    text,
    danger = false,
}: RentalInfoRowProps) {

    return (
        <div
            className={`
                flex
                items-center
                gap-4
                text-[16px]

                ${
                    danger
                        ? "text-red-600"
                        : "text-gray-600"
                }
            `}
        >

            <span
                className={`
                    text-[20px]
                    ${
                        danger
                            ? "text-red-600"
                            : "text-gray-700"
                    }
                `}
            >
                {icon}
            </span>

            <span className="text-[16px]">
                {text}
            </span>

        </div>
    );
}
