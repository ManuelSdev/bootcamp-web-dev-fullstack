/**
 * Este componente recibe un objeto anuncio y renderiza una tarjeta 
 */

import { Link } from "react-router-dom";

const nameToUrl = (adName) => (
    adName.replace(/\s/g, "-")
)

const AdCard = ({ ad }) => {

    const adUrl = `${nameToUrl(ad.name)}-${ad._id}`

    return (
        <Link target="_blank" to={`/ads/${adUrl}`} className=" column is-one-quarter" >
            <div className="AdCard ">
                {/*<Button onClick={clica}></Button>*/}
                <div className="card">
                    {ad.sale ?
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={ad.images} alt="Placeholder image"></img>
                            </figure>
                        </div>
                        :
                        <div>ESTOY BUSCANDO</div>

                    }

                    <div className="card-content">
                        <div className="media">
                            <div className="media-content is-clipped">
                                {ad.sale && <p className="title is-3">{ad.price} €</p>}

                                <p className="subtitle is-4">{ad.name}</p>
                                <p className="subtitle is-6">{ad.description}</p>
                            </div>
                        </div>
                        <div className="content">
                            {ad.tags.map(tag => (
                                <span>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </Link>
    )
}

export default AdCard