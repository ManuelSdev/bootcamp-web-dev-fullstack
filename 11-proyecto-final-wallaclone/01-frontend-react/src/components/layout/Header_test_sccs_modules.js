import { Link } from "react-router-dom"
import Button from "../shared/Button"
//import AuthButton from "../auth/AuthButton/AuthButton"
//import Button from "../shared/Button"
import Search from "./Search"
import useModal from "../customHooks/useModal"
import ModalWindow from "../shared/modalWindow/ModalWindow"
import ModalButton from "../shared/modalWindow/ModalButton"
import LoginPage from "../auth/LoginPage/LoginPage"
import s from "../../components/shared/Button.module.scss"
const Header = () => {


    const { modalClass, openModal, closeModal } = useModal()
    return (
        <div className="Header">

            <Search></Search>
            <div className="buttons">
                <Link to="/ads/new"> <Button cb={`${s.button} ${s.primary}`}>Subir producto</Button></Link>
                <Link to="/auth/login">  <ModalButton component={LoginPage}> <LoginPage /> </ModalButton></Link>
                <Link to="/auth/register">  <Button>Registro</Button></Link>
                <Link to="/user">  <Button>Mi zona</Button></Link>
            </div>

        </div >

    )
}

export default Header