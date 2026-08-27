import React from "react";
import { Link } from "react-router-dom";
import HeartIcon from "../../shared/icons/HeartIcon"
import { ReactComponent as Heart } from "../../../assets/cards-heart.svg"
import { updateFavId } from "../../../api/user";
import Button from "../../shared/Button";


const nameToUrl = (adName) => (
    adName.replace(/\s/g, "-")
)
const AdFavoriteCard = ({ ad, trigger }) => {


    const adUrl = `${nameToUrl(ad.name)}-${ad._id}`

    const foto = 'https://via.placeholder.com/150';
    const request = {}
    request.adId = ad._id
    const updateFavIdAndNewPromise = async () => {
        await updateFavId(ad._id, "pull")
        trigger()

    }
    return (

        <div className="AdCard column is-is-one-fifth">
            {/*<Button onClick={clica}></Button>*/}
            <div className="card ">
                <Link to={`/ads/${adUrl}`}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={foto} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content is-clipped">
                                <p className="title is-3">{ad.price} €</p>
                                <p className="subtitle is-4">{ad.name}</p>
                                <p className="subtitle is-6">{ad.description}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Button onClick={updateFavIdAndNewPromise} >
                    <Heart
                        className="mr-2"
                        width="30"
                        height="30"
                        fill="red"
                    ></Heart>
                    Eliminar
                </Button>

            </div>


        </div >


    )
}

export default AdFavoriteCard