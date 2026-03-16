import { useState } from "react";
import { Button } from "../components/button";
import { DatePicker } from "../components/date-picker";
import { Text } from "../components/text";
import { TextInput } from "../components/text-input";
import { TimeSlot } from "../components/time-slot";
import { openingHours } from "../utils/hours";
import { useAppointment } from "../hooks/use-appointment";

interface AppointmentFormProps {
    selectedDate: string;
    onDateChange: (date: string) => void;
}

export const AppointmentForm = ({
    selectedDate,
    onDateChange,
}: AppointmentFormProps) => {
    const [selectedHour, setSelectedHour] = useState<string | null>(null);
    const [client, setClient] = useState<string | null>(null);
    const { appointments, createAppointment } = useAppointment();

    const bookedHours = appointments
        .filter((appt) => appt.day === selectedDate)
        .map((appt) => appt.hour);

    const handleHour = (hour: string) => {
        if (hour === selectedHour) {
            return;
        }
        setSelectedHour(hour);
    };

    const handleDate = (date: string) => {
        onDateChange(date);
    };

    const handleClient = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClient(e.target.value || "");
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!selectedHour || !selectedDate || !client) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        createAppointment({
            client: client,
            day: selectedDate,
            hour: selectedHour,
        });

        setClient(null);
        setSelectedHour(null);
        onDateChange("");
    };

    return (
        <form onSubmit={handleSave} className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-3">
                <Text color="high" variant="body-title-lg">
                    Agende um atendimento
                </Text>
                <Text color="default" variant="body-sm">
                    Selecione data, horário e informe o nome do cliente para
                    criar o agendamento
                </Text>
            </div>

            <div className="flex flex-col gap-3">
                <Text color="medium" variant="body-md-bold">
                    Data
                </Text>
                <DatePicker value={selectedDate || ""} onChange={handleDate} />
            </div>

            <div className="flex flex-col gap-3">
                <Text color="medium" variant="body-md-bold">
                    Horários
                </Text>

                <div className="flex flex-col gap-3">
                    {Object.values(openingHours).map((period) => (
                        <div className="flex flex-col gap-1" key={period.id}>
                            <Text color="default" variant="body-sm">
                                {period.title}
                            </Text>

                            <div className="flex flex-wrap gap-2">
                                {period.hours.map((hour) => {
                                    const isBooked = bookedHours.includes(hour);
                                    const isSelected = selectedHour === hour;

                                    return (
                                        <TimeSlot
                                            variant={
                                                isBooked
                                                    ? "disabled"
                                                    : isSelected
                                                      ? "selected"
                                                      : "default"
                                            }
                                            onClick={() => handleHour(hour)}
                                            key={hour}
                                            type="button"
                                        >
                                            {hour}
                                        </TimeSlot>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <Text color="medium" variant="body-md-bold">
                    Cliente
                </Text>
                <TextInput
                    value={client || ""}
                    onChange={handleClient}
                    placeholder="Nome do cliente"
                />
            </div>

            <Button type="submit">AGENDAR</Button>
        </form>
    );
};
