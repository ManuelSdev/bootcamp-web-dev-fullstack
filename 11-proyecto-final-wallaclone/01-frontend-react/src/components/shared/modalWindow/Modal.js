import Button from "../Button"


function Modal({ children, modalClass, openModal, closeModal, component, handleDelete, confirmText }) {
    console.log("CLASSS", modalClass)
    return (
        <div className={modalClass} >
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content" onClick={openModal}>
                <div className="box">

                    {children}
                    <div className="buttons">
                        <Button onClick={handleDelete}>{confirmText}</Button>
                        <Button onClick={closeModal}>{children}</Button>

                    </div>
                </div>

            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    )

}

export default Modal