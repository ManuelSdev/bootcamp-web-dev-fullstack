import React from "react"
import { useParams } from "react-router-dom"
import { getMemberAds } from "../../api/ads"
import { getUserByName } from "../../api/user"
import usePromise from "../customHooks/usePromise"
import Layout from "../layout/Layout"
import Loader from "../shared/Loaders/Loader"
import MemberAdsGrid from "./MemberAdsGrid"


const catchUserNameInUrl = (url) => {
    const index = 1 + url.lastIndexOf("/")
    const adId = url.slice(index)
    return adId
}
//Método que recibe un nombre y lo retorna cambiando guiones por espacios
const urlToName = (url) => (
    url.replace("-", " ")
)
const MemberPage = () => {

    const { loading: loadingUser, error: errorUser, throwPromise: userPromise, data: user } = usePromise({})
    const { loading: loadingAds, error: errorAds, throwPromise: adsPromise, data: ads } = usePromise([])

    React.useEffect(() => {
        userPromise(getUserByName(memberName))
        adsPromise(getMemberAds(memberName))
    }, []);



    /**
     *Pillo los parametros de la url que ponen los Link de cada 
     encabezado de anuncio con el nombre del usuario miembro que lo 
      publicó
     */
    const { memberId } = useParams()
    const memberNameInUrl = catchUserNameInUrl(memberId)
    const memberName = urlToName(memberNameInUrl)

    return (
        <Layout>
            {
                (loadingUser || loadingAds) ?
                    <Loader />
                    :
                    <div className="MemberPage container">
                        <div className="box">
                            <div>Nombre de usuario: {user.username} </div>
                        </div>
                        <MemberAdsGrid ads={ads} ></MemberAdsGrid>
                    </div>
            }
        </Layout>
    )

}


export default MemberPage