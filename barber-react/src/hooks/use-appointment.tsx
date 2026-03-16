import useLocalStorage from "use-local-storage";
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

    return {
        prepareAppointment,
    };
};
