import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const iconVariants = cva("", {
    variants: {
        animate: {
            false: "",
            true: "animate-pulse",
        },
    },
    defaultVariants: {
        animate: false,
    },
});

interface IconProps
    extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

export const Icon = ({ svg: SvgComponent, className, ...props }: IconProps) => {
    return <SvgComponent className={iconVariants({ className })} {...props} />;
};
