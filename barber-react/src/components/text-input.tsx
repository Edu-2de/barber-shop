import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "./icon";
import UserSquareIcon from "../assets/icons/UserSquare.svg?react";


export const textInputContainer = cva(`
    flex w-full items-center gap-2 rounded-lg border-2 
    border-gray-500 bg-transparent p-3 transition-colors 
    focus-within:border-yellow focus-within:bg-gray-600
`);

interface TextInputProps
    extends
        React.ComponentProps<"input">,
        VariantProps<typeof textInputContainer> {}

export const TextInput = ({ className, ...props }: TextInputProps) => { 
    return (
        <div className={textInputContainer({ className })}>
            <input
                type="text"
                className="peer flex-1 bg-transparent text-gray-200 outline-none placeholder:text-gray-400"
                {...props}
            />

            <div className="order-first hidden peer-placeholder-shown:block">
                <Icon color={"highlight"} svg={UserSquareIcon} />
            </div>
        </div>
    );
};
