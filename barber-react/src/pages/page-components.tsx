import { Icon } from "../components/icon";
import { Text } from "../components/text";
import { TimeSlot } from "../components/time-slot";
import { DatePicker } from "../components/date-picker";
import { AppointmentHeader } from "../core-components/appointment-header";
import { AppointmentItem } from "../core-components/appointment-item";

import Calendar from "../assets/icons/CalendarBlank.svg?react";
import CaretDown from "../assets/icons/CaretDown.svg?react";
import MoonStars from "../assets/icons/MoonStars.svg?react";
import { Button } from "../components/button";
import { TextInput } from "../components/text-input";
import { AppointmentCard } from "../core-components/appointment-card";

import { Header } from "../core-components/header";

export const PageComponents = () => {
    return (
        <div className="flex flex-col items-center gap-6 py-6">
            <Header />

            <div className="flex gap-2 py-2">
                <Text color={"default"} variant={"body-sm"}>
                    Teste
                </Text>
                <Text color={"muted"}>Teste</Text>
                <Text color={"medium"} variant={"body-md-bold"}>
                    Teste
                </Text>
                <Text color={"medium"} variant={"body-title-md"}>
                    Teste
                </Text>
                <Text color={"high"} variant={"body-title-lg"}>
                    Teste
                </Text>
            </div>

            <div className="flex gap-2 py-2">
                <Icon className="fill-yellow h-5 w-5" svg={Calendar} />
                <Icon className="fill-yellow h-5 w-5" svg={CaretDown} />
                <Icon className="fill-yellow h-5 w-5" svg={MoonStars} />
            </div>

            <div className="flex gap-2 py-2">
                <TimeSlot>11:09</TimeSlot>
                <TimeSlot variant={"disabled"}>11:09</TimeSlot>
                <TimeSlot variant={"selected"}>11:09</TimeSlot>
            </div>

            <div className="flex gap-2 py-2">
                <DatePicker />
            </div>

            <div className="flex w-60 flex-col gap-4 py-2">
                <AppointmentHeader period="morning" />
                <AppointmentHeader period="afternoon" />
                <AppointmentHeader period="night" />
            </div>

            <div className="flex w-60 flex-col gap-4">
                <AppointmentItem>Lousiane</AppointmentItem>
                <AppointmentItem>Lousiane</AppointmentItem>
            </div>

            <div className="flex w-50 flex-col gap-4">
                <Button>AGENDAR</Button>
                <Button variant={"disabled"}>AGENDAR</Button>
            </div>

            <div className="flex w-50 flex-col gap-4">
                <TextInput placeholder="Nome do cliente" />
            </div>

            <div className="flex w-150 flex-col gap-4">
                <AppointmentCard />
            </div>
        </div>
    );
};
