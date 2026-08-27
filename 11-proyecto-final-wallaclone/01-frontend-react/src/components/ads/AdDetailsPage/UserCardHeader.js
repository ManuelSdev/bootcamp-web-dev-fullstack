

import React from 'react'
import LinkButton from '../../shared/LinkButton';
import Button from '../../shared/Button';
import ModalWindow from '../../shared/modalWindow/ModalWindow';
import useModal from '../../customHooks/useModal';
import { Link } from 'react-router-dom';


const nameToUrl = (adName) => (
    adName.replace(/\s/g, "-")
)
const test = "algo"
export default function UserCardHeader({ ad, handleDelete }) {
    const { modalClass, openModal, closeModal, handleCloseModal, handleOpenModal } = useModal()
    console.log("AD AUTHOR", ad.author)
    const authorUrl = ad.author && nameToUrl(ad.author)
    console.log(ad)
    return (

        <div className="is-flex is-flex-direction-row is-justify-content-space-between">
            <Link to={`/members/${authorUrl}`}>
                <div className="is-flex is-flex-direction-row ">
                    <figure className="pr-4 image is-64x64">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                    <div>
                        <div >{ad.author}</div>
                        <div>numeroProductos</div>
                    </div>
                </div>
            </Link>
            <div className="">
                <div className="pr-4">DESTÁCALO?</div>
            </div>
            <div className="is-flex is-flex-direction-row  is-justify-content-flex-end ">
                <Button className="mr-2">Vendido</Button>
                <Button className="mr-2">Reservado</Button>
                <LinkButton className="mr-2" link={`/user/edit/${ad._id}`}>Editar</LinkButton>
                <Button onClick={openModal}>Eliminar</Button>
                <ModalWindow
                    modalClass={modalClass}
                    openModal={openModal}
                    closeModal={handleCloseModal}
                >
                    <div>
                        ¿Desea eliminar el anuncio?
                        <div className="buttons">
                            <Button onClick={handleDelete}>Eliminar anuncio</Button>
                            <Button onClick={handleCloseModal}>Cancelar</Button>
                        </div>
                    </div>
                </ModalWindow>
            </div>
        </div>
    )
}
