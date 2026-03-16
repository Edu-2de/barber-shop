import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { Text } from "./text";

export const buttonVariants = cva(
    `  
        bg-yellow flex items-center justify-center p-3 
        rounded-lg border-2 transition-all
        border-transparent w-full
    `,
    {
        variants: {
            variant: {
                default: "hover:border-yellow-light cursor-pointer",
                disabled: "pointer-events-none brightness-50",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

interface ButtonProps
    extends
        React.ComponentProps<"button">,
        VariantProps<typeof buttonVariants> {}

export const Button = ({
    className,
    variant,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            disabled={variant === "disabled"}
            className={buttonVariants({ variant, className })}
            {...props}
        >
            <Text color={"focus"} variant={"body-sm-bold"}>
                {children}
            </Text>
        </button>
    );
};
