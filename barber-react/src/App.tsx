import { Icon } from "./components/icon";
import { Text } from "./components/text";

import Calendar from "./assets/icons/CalendarBlank.svg?react"

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
                <Icon className="fill-yellow w-5 h-5" svg={Calendar} />
            </div>
        </div>
    );
};
