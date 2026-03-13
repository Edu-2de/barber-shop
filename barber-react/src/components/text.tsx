import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const textVariants = cva("font-sans ", {
    variants: {
        variant: {
            "body-sm": "text-sm leading-5 font-normal",
            "body-md": "text-base leading-6 font-normal",
            "body-md-bold": "text-base leading-6 font-semibold",

            "body-title-md": "text-md leading-6 font-bold",
            "body-title-lg": "text-lg leading-6 font-bold",
        },
        color: {
            high: "text-gray-100",
            medium: "text-gray-200",
            default: "text-gray-300",
            muted: "text-gray-500",
            highlight: "text-yellow",
        },
    },
    defaultVariants: {
        variant: "body-md",
        color: "default",
    },
});

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

export const Text = ({
    as = "span",
    variant,
    color,
    className,
    children,
    ...props
}: TextProps) => {
    return React.createElement(
        as,
        {
            className: textVariants({ variant, color, className }),
            ...props,
        },
        children,
    );
};
