import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { PeriodHeader } from "./period-header";
import { AppointmentItem } from "./appointment-item";

export const periodCardContainer = cva(
    `w-full flex flex-col rounded-lg border-2 border-gray-600`,
);

interface PeriodCardProps
    extends
        React.ComponentProps<"div">,
        VariantProps<typeof periodCardContainer> {}

export const PeriodCard = ({ className, ...props }: PeriodCardProps) => {
    return (
        <div className={periodCardContainer({ className })} {...props}>
            <PeriodHeader period="morning" />
            <AppointmentItem>Jaylon</AppointmentItem>
        </div>
    );
};
