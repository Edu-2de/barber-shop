import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { AppointmentHeader, periodConfig } from "./appointment-header";
import { AppointmentItem } from "./appointment-item";
import { Text } from "../components/text";
import { openingHours } from "../utils/hours";
import type { Appointment } from "../models/appointment"; // Importe a tipagem

export const appointmentCardContainer = cva(
    `w-full flex flex-col rounded-lg border-2 border-gray-600`,
);

interface PeriodCardProps
    extends
        React.ComponentProps<"div">,
        VariantProps<typeof appointmentCardContainer> {
    period: keyof typeof periodConfig;

    dailyAppointments: Appointment[];
}

export const AppointmentCard = ({
    className,
    period,
    dailyAppointments,
    ...props
}: PeriodCardProps) => {
    const allowedHours = openingHours[period].hours;

    const periodAppointments = dailyAppointments.filter((appt) =>
        allowedHours.includes(appt.hour),
    );

    return (
        <div className={appointmentCardContainer({ className })} {...props}>
            <AppointmentHeader period={period} />

            <div className="flex flex-col p-3">
                {periodAppointments.length > 0 ? (
                    periodAppointments.map((appt) => (
                        <AppointmentItem
                            key={appt.id}
                            hour={appt.hour}
                            appointment={appt}
                        >
                            {appt.client}
                        </AppointmentItem>
                    ))
                ) : (
                    <Text className="p-4 italic opacity-50">
                        Nenhum agendamento para este período.
                    </Text>
                )}
            </div>
        </div>
    );
};
