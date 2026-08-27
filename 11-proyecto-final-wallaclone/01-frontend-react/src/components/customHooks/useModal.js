import React from 'react';

const useModal = () => {
    const [modalClass, setModalClass] = React.useState("modal")

    const openModal = (e) => {
        //console.log('open');
        setModalClass("modal is-active")
    }

    const closeModal = (e) => {
        //console.log('close');
        setModalClass("modal")
    }

    const handleOpenModal = (e) => {
        e.stopPropagation();
        //e.nativeEvent.stopImmediatePropagation();
        // console.log('open');
        setModalClass("modal is-active")
    }

    const handleCloseModal = (e) => {
        e.stopPropagation();
        //e.nativeEvent.stopImmediatePropagation();
        // console.log('close');
        setModalClass("modal")
    }

    return {
        modalClass,
        openModal,
        closeModal,
        handleCloseModal,
        handleOpenModal
    }
}

export default useModal