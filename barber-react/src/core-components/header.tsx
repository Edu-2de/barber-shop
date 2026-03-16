import Logo from "../assets/images/Logo.svg?react"


export const Header = () => {
    return (
        <header className="flex p-6 w-36 bg-gray-600 rounded-r-lg" >
            <Logo />
        </header>
    );
}