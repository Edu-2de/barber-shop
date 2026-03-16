import { Button } from "../components/button";
import { DatePicker } from "../components/date-picker";
import { Text } from "../components/text";
import { TextInput } from "../components/text-input";
import { TimeSlot } from "../components/time-slot";
import { openingHours } from "../utils/hours";

export const AppointmentForm = () => {
    

    return (
        <div className="flex w-full flex-col gap-8">
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
                <DatePicker />
            </div>

            <div className="flex flex-col gap-3">
                <Text color="medium" variant="body-md-bold">
                    Horários
                </Text>

                <div className="flex flex-col gap-2">
                    <Text color="default" variant="body-sm">
                        Manhã
                    </Text>
                    <div className="flex flex-wrap gap-2">
                        {openingHours.morning.map((hour) => (
                            <TimeSlot key={hour}>{hour}</TimeSlot>
                        ))}
                    </div>
                    <Text color="default" variant="body-sm">
                        Tarde
                    </Text>
                    <div className="flex flex-wrap gap-2">
                        {openingHours.afternoon.map((hour) => (
                            <TimeSlot key={hour}>{hour}</TimeSlot>
                        ))}
                    </div>
                    <Text color="default" variant="body-sm">
                        Noite
                    </Text>
                    <div className="flex flex-wrap gap-2">
                        {openingHours.night.map((hour) => (
                            <TimeSlot key={hour}>{hour}</TimeSlot>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <Text color="medium" variant="body-md-bold">
                    Cliente
                </Text>
                <TextInput placeholder="Nome do cliente" />
            </div>

            <Button>AGENDAR</Button>
        </div>
    );
};
