import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const iconVariants = cva("w-5 h-5 cursor-pointer", {
    variants: {
        animate: {
            false: "",
            true: "animate-pulse",
        },
        color: {
            highlight: "fill-yellow hover:fill-yellow-dark",
            neutral: "fill-gray-300 hover:fill-gray-500",
        },
    },
    defaultVariants: {
        animate: false,
        color: "highlight",
    },
});

interface IconProps
    extends
        Omit<React.ComponentProps<"svg">, "color">,
        VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

export const Icon = ({
    svg: SvgComponent,
    animate,
    color,
    className,
    ...props
}: IconProps) => {
    return (
        <SvgComponent
            className={iconVariants({ animate, color, className })}
            {...props}
        />
    );
};
