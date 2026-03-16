export const APPOINTMENT_KEY = "appointment";

export const AppointmentState = {
    Creating: "creating",
    Created: "created",
} as const;

export type AppointmentState =
    (typeof AppointmentState)[keyof typeof AppointmentState];

export interface Appointment {
    id: string;
    client: string;
    hour: string;
    concluded?: boolean;
    state?: AppointmentState;
}
