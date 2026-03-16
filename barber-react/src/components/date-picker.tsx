import { useRef } from "react";
import type React from "react";
import { Icon } from "./icon";
import { cva } from "class-variance-authority";

import Calendar from "../assets/icons/CalendarBlank.svg?react";
import CaretDown from "../assets/icons/CaretDown.svg?react";

interface DatePickerProps extends Omit<
    React.ComponentProps<"input">,
    "onChange" | "value"
> {
    value?: string;
    onChange?: (newValue: string) => void;
}

const datePickerContainer = cva(`
    group flex w-full cursor-pointer items-center gap-2 
    rounded-lg border-2 border-gray-500 bg-transparent 
    p-3 transition-colors hover:border-yellow
`);

const datePickerInput = cva(`
    flex-1 cursor-pointer appearance-none bg-transparent 
    text-gray-200 outline-none [&::-webkit-calendar-picker-indicator]:hidden
`);

export const DatePicker = ({
    className,
    onClick,
    value,
    onChange,
    ...props
}: DatePickerProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpenPicker = (e: React.MouseEvent<HTMLDivElement>) => {
        if (inputRef.current) {
            inputRef.current.showPicker();
        }

        if (onClick) {
            onClick(e as unknown as React.MouseEvent<HTMLInputElement>);
        }
    };

    return (
        <div
            onClick={handleOpenPicker}
            className={datePickerContainer({ className })}
        >
            <Icon
                color="highlight"
                svg={Calendar}
                className="group-hover:fill-yellow-dark transition-colors"
            />

            <input
                ref={inputRef}
                type="date"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className={datePickerInput()}
                {...props}
            />

            <Icon
                color="neutral"
                svg={CaretDown}
                className="transition-colors group-hover:fill-gray-500"
            />
        </div>
    );
};
