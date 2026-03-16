import { DatePicker } from "../components/date-picker";
import { Header } from "../core-components/header";
import { AppointmentForm } from "../core-components/AppointmentForm";

export const PageHome = () => {
    return (
        <div className="flex min-h-screen w-full bg-gray-800">
            <Header />
            <aside className="relative m-5 w-124.5 rounded-lg border-r border-gray-600 bg-gray-700">
                <div className="mt-24 px-16">
                    <AppointmentForm />
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto px-24 py-16">
                <div className="mx-auto flex max-w-3xl flex-col gap-12">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-1 flex-col gap-2">
                            <h1 className="text-2xl font-bold text-gray-100">
                                Sua agenda
                            </h1>
                            <p className="text-gray-300">
                                Consulte os seus cortes de cabelo agendados por
                                dia
                            </p>
                        </div>

                        <DatePicker className="w-50!" />
                    </div>

                    <div className="flex flex-col gap-8"></div>
                </div>
            </main>
        </div>
    );
};
