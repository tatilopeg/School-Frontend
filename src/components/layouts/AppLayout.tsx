import { ReactElement } from "react";
import { Header } from "../sections/Header/Header";
import { Outlet } from "react-router";

export default function AppLayout():ReactElement{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}