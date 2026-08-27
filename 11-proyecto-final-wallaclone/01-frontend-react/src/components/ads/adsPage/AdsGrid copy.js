import { useAuthContext } from "../../auth/context"
import AdCard from "./AdCard"
import React, { useRef } from 'react';


const AdsGrid = ({ ads, ...props }) => {
    const { areFiltersOn, handleFiltersAreOn, handleFiltersAreOff } = useAuthContext()
    const { loading } = useAuthContext()
    const { filters } = useAuthContext()
    const { searchKeys } = filters;
    //const { searchKeys } = filter;
    // loading || handleFiltersAreOff()
    console.log("SEARCHA KEYS VALUE", searchKeys)
    console.log("RENDER ADS GRID")

    console.log("keys", searchKeys)
    const staticsSearchKeys = React.useRef(searchKeys)
    console.log("staticsSearchKeys", staticsSearchKeys.current)


    return (
        <div className="AdsGrid">
            <div className="columns is-multiline is-mobile">
                {ads.map(ad => (
                    ad.name.includes(searchKeys) && <AdCard key={ad._id} ad={ad} {...props}></AdCard>
                ))}
            </div>
        </div>
    )
}

export default AdsGrid