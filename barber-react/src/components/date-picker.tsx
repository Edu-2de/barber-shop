import { useRef } from "react";
import type React from "react";
import { Icon } from "./icon";

import Calendar from "../assets/icons/CalendarBlank.svg?react";
import CaretDown from "../assets/icons/CaretDown.svg?react";

type DatePickerProps = React.ComponentProps<"input">;

export const DatePicker = ({
    className,
    onClick,
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
            className={`group hover:border-yellow flex w-full items-center gap-2 rounded-lg border-2 border-gray-500 bg-transparent p-3 transition-colors ${className || ""} `}
        >
            <Icon color="highlight" svg={Calendar} />

            <input
                ref={inputRef}
                type="date"
                className={`flex-1 appearance-none bg-transparent text-gray-200 outline-none [&::-webkit-calendar-picker-indicator]:hidden`}
                {...props}
            />

            <Icon color="neutral" svg={CaretDown} />
        </div>
    );
};
