import React from "react"
import ModalWindow from "../shared/modalWindow/ModalWindow"
import Header from "./Header"
import useModal from "../customHooks/useModal"
import FiltersBar from "./FiltersBar"
import { useAuthContext } from "../auth/context"



const Layout = ({ children }) => {
    const { areFiltersOn, handleFiltersAreOn, handleFiltersAreOff } = useAuthContext();

    console.log("FILTERS ON EN LAYOUT?", areFiltersOn)
    return (
        <div className="Layout" >
            <div className="section">
                <Header ></Header>

            </div>
            <div style={{ position: "fixed" }} className="">

            </div>



            <main className="container ">
                {children}
            </main>

        </div >
    )
}

export default Layout