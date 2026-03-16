import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { AppointmentHeader } from "./appointment-header";
import { AppointmentItem } from "./appointment-item";

export const appointmentCardContainer = cva(
    `w-full flex flex-col rounded-lg border-2 border-gray-600`,
);

interface PeriodCardProps
    extends
        React.ComponentProps<"div">,
        VariantProps<typeof appointmentCardContainer> {}

export const AppointmentCard = ({ className, ...props }: PeriodCardProps) => {
    return (
        <div className={appointmentCardContainer({ className })} {...props}>
            <AppointmentHeader period="morning" />
            <AppointmentItem>Jaylon</AppointmentItem>
        </div>
    );
};
