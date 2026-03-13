import { cva, type VariantProps } from "class-variance-authority";
import { Text } from "./text";

export const timeSlotVariants = cva(
    `
        w-20 h-10 rounded-lg flex 
        items-center justify-center
        border-2 bg-gray-600
        cursor-pointer
    `,
    {
        variants: {
            variant: {
                default: "border-gray-500  hover:border-none hover:bg-gray-500",
                selected: "border-yellow",
                disabled: "border-gray-600 bg-transparent pointer-events-none",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

interface TimeSlotProps extends VariantProps<typeof timeSlotVariants> {
    className?: string;
    children?: React.ReactNode;
    textColor?: "default" | "muted" | "highlight" | "high" | "medium";
}

export const TimeSlot = ({
    variant,
    className,
    children,
    textColor,
    ...props
}: TimeSlotProps) => {
    const finalTextColor =
        textColor ||
        (variant === "disabled"
            ? "muted"
            : variant === "selected"
              ? "highlight"
              : "medium");

    return (
        <button className={timeSlotVariants({ variant, className })} {...props}>
            <Text color={finalTextColor}>{children}</Text>
        </button>
    );
};
