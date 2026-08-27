

import React from 'react'



export default function AdDetailsCard({ ad, cardHeader }) {
    const foto = 'https://via.placeholder.com/150';
    console.log("+++++++++++++++++++++++++++", ad)
    return (
        <div className="AdDetailCard container is-max-desktop">
            <div className="box">
                {cardHeader}
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-5by4">
                            <img src={ad.images} alt="Placeholder image"></img>
                        </figure>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content is-clipped">
                                <p className="title is-3">{ad.price} €</p>
                                <p className="subtitle is-4">{ad.name}</p>
                                <p className="subtitle is-6">{ad.description}</p>
                            </div>
                        </div>
                        <div className="content">
                            {ad.tags}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
