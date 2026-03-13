import { Text } from "./components/text";

export const App = () => {
    return (
        <div className="flex flex-col items-center gap-2 py-6">
            <div className="flex gap-2">
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
        </div>
    );
};
