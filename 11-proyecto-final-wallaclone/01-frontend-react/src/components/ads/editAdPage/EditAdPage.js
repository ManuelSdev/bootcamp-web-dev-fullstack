import React from "react"
import { useParams } from "react-router";
import { getOneAd, updateAd } from "../../../api/ads"
import style from '../../ads/newAdPage/NewAdPage.module.scss'
import usePromise from "../../customHooks/usePromise";
import AdForm from "../newAdPage/AdForm";



const AditAdPage = () => {
    const { loading, error, throwPromise, data: ad } = usePromise({})

    //Pillo los parametros de la url que ponen los Link de cada anuncio con el nombre+id de cada uno de ellos
    const { adId } = useParams();
    //CathadIdUrl() extrae el id de anuncio y lo guardo en la propiedad adId del objeto que mando en la petición
    const adIdRequest = adId
    //console.log("RENDER EN EDIT PAGE")
    //console.log("EDIT PAGE ad", ad)

    React.useEffect(() => {
        throwPromise(getOneAd(adIdRequest))
    }, [])

    const onSubmit = (newAdValues) => {
        throwPromise(updateAd(ad._id, newAdValues))
    }

    return (
        <div className={style.NewAdPage}>
            EDIT PAGE
            <div className={style.container}>
                {
                    loading ?
                        "LOADING"
                        :
                        <AdForm ad={ad} onSubmit={onSubmit} ></AdForm>
                }
            </div>
        </div>
    )
}

export default AditAdPage