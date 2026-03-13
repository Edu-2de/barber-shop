import { Icon } from "./components/icon";
import { Text } from "./components/text";

import Calendar from "./assets/icons/CalendarBlank.svg?react";
import CaretDown from "./assets/icons/CaretDown.svg?react";
import MoonStars from "./assets/icons/MoonStars.svg?react";
import { TimeSlot } from "./components/time-slot";

export const App = () => {
    return (
        <div className="flex flex-col items-center gap-2 py-6">
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
                <TimeSlot >11:09</TimeSlot>
                <TimeSlot variant={"disabled"} >11:09</TimeSlot>
                <TimeSlot variant={"selected"} >11:09</TimeSlot>
            </div>
        </div>
    );
};
