import { useLocalStorage } from "./use-local-storage";
import {
    type Appointment,
    APPOINTMENT_KEY,
    AppointmentState,
} from "../models/appointment";

export const useAppointment = () => {
    const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
        APPOINTMENT_KEY,
        [],
    );

    const prepareAppointment = () => {
        setAppointments([
            ...appointments,
            {
                id: Math.random().toString(36).substring(2, 9),
                client: "",
                hour: "",
                day: "",
                state: AppointmentState.Creating,
            },
        ]);
    };

    const createAppointment = (payload: {
        client: string;
        day: string;
        hour: string;
    }) => {
        const newAppointment: Appointment = {
            id: Math.random().toString(36).substring(2, 9),
            state: AppointmentState.Created,
            ...payload,
        };
        console.log("Novo Agendamento Criado:", newAppointment);

        setAppointments([...appointments, newAppointment]);
    };

    const deleteAppointment = (id: string) => {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
    }

    return {
        appointments,
        prepareAppointment,
        createAppointment,
        deleteAppointment,
    };
};
