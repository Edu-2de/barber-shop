import { Outlet } from "react-router"
import { Header } from "../core-components/header"
import { MainContent } from "../core-components/main-content"


export const LayoutMain = () => {
    return(
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
        </>
    )
}