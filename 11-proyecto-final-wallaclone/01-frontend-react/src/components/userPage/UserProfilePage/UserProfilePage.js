import { Fragment } from "react"
import { useAuthContext } from "../../auth/context"
import LogoutPage from "../../auth/LogoutPage/LogoutPage"
import useModal from "../../customHooks/useModal"
import Button from "../../shared/Button"
import ModalWindow from "../../shared/modalWindow/ModalWindow"



const UserProfilePage = () => {
    const { handleLogout } = useAuthContext()
    const { modalClass, openModal, closeModal, handleCloseModal, handleOpenModal } = useModal()
    return (
        <Fragment>
            <div className="UserProfilePage container">
                <Button onClick={handleOpenModal} >Cerrar sesión</Button>
                <div>PERFIL DE USUARIO </div>
            </div>
            <ModalWindow
                modalClass={modalClass}
                openModal={openModal}
                closeModal={handleCloseModal}
            >
                <LogoutPage closeModal={handleCloseModal} ></LogoutPage>
            </ModalWindow>
        </Fragment>

    )
}

export default UserProfilePage