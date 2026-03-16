import { useState } from "react";
import { Button } from "../components/button";
import { DatePicker } from "../components/date-picker";
import { Text } from "../components/text";
import { TextInput } from "../components/text-input";
import { TimeSlot } from "../components/time-slot";
import { openingHours } from "../utils/hours";
import { useAppointment } from "../hooks/use-appointment";

export const AppointmentForm = () => {
    const [selectedHour, setSelectedHour] = useState<string | null>(null);
    const [selecteDay, setSelecteDay] = useState<string | null>(null);
    const [client, setClient] = useState<string | null>(null);
    const { createAppointment } = useAppointment();

    const handleHour = (hour: string) => {
        if (hour === selectedHour) {
            return;
        }
        setSelectedHour(hour);
    };

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelecteDay(e.target.value || "");
    };

    const handleClient = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClient(e.target.value || "");
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!selectedHour || !selecteDay || !client) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        createAppointment({
            client: client,
            day: selecteDay,
            hour: selectedHour,
        });

        setClient(null);
        setSelectedHour(null);
        setSelecteDay(null);
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
                <DatePicker value={selecteDay || ""} onChange={handleDate} />
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
                                    const isSelected = selectedHour === hour;

                                    return (
                                        <TimeSlot
                                            variant={
                                                isSelected
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
