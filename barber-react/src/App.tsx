
import { Text } from "./components/text";

export const App = () => {
  return (
    <div className="flex flex-col gap-2 items-center py-6 bg-gray-800">
      <div className="flex gap-2">
        <Text variant={"body-sm"}>Teste</Text>
        <Text>Teste</Text>
        <Text variant={"body-md-bold"}>Teste</Text>
        <Text variant={"body-title-md"}>Teste</Text>
        <Text variant={"body-title-lg"}>Teste</Text>
      </div>
    </div>
  );
};
