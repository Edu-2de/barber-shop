import type React from "react";
import { cva } from "class-variance-authority";
import { Icon } from "../components/icon";
import { Text } from "../components/text";

import SunHorizon from "../assets/icons/SunHorizon.svg?react";
import CloudSun from "../assets/icons/CloudSun.svg?react";
import MoonStars from "../assets/icons/MoonStars.svg?react";

const appointmentHeaderContainer = cva(
    "flex w-full gap-4 flex-row items-center justify-between border-b border-gray-600 p-4",
);

export const periodConfig = {
    morning: { icon: SunHorizon, title: "Manhã", time: "09h-12h" },
    afternoon: { icon: CloudSun, title: "Tarde", time: "13h-18h" },
    night: { icon: MoonStars, title: "Noite", time: "19h-21h" },
};

interface AppointmentHeaderProps extends React.ComponentProps<"div"> {
    period: keyof typeof periodConfig;
}

export const AppointmentHeader = ({
    period,
    className,
    ...props
}: AppointmentHeaderProps) => {
    const currentPeriod = periodConfig[period];
    return (
        <div className={appointmentHeaderContainer({ className })} {...props}>
            <Icon svg={currentPeriod.icon} color="muted" />
            <Text variant={"body-sm"} className="flex-1">
                {currentPeriod.title}
            </Text>
            <Text variant={"body-sm"}>{currentPeriod.time}</Text>
        </div>
    );
};
