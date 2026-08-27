import Button from "../Button";
import useModal from "../../customHooks/useModal";
import ModalWindow from "./ModalWindow";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";


const ModalButton = ({ modalClass, openModal, closeModal, children, component, buttonText }) => {
    //const { modalClass, openModal, closeModal } = useModal()

    return (
        <div>


            <LinkButton
                handleButton={openModal}
                link={"/auth"}
            >
                {buttonText}
            </LinkButton>
            <div className={modalClass} >
                <div className="modal-background" onClick={closeModal}></div>
                <div className="modal-content" onClick={openModal}>
                    <div className="box">
                        <div className=" is-flex is-justify-content-flex-end">
                            <button onClick={closeModal} className="delete" aria-label="delete" ></button>
                        </div>


                        {children}
                    </div>
                </div>
            </div>
        </div>


    )

}

export default ModalButton