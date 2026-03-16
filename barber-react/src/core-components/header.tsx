import Logo from "../assets/images/Logo.svg?react";

export const Header = () => {
    return (
        <header className="flex w-36 rounded-r-lg bg-gray-600 p-2 items-center justify-center absolute top-0 z-10">
            <Logo className="h-8 md:h-14" />
        </header>
    );
};
