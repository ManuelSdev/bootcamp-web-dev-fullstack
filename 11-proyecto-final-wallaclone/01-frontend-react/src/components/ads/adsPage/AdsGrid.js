import { useAuthContext } from "../../auth/context"
import AdCard from "./AdCard"
import React, { useRef } from 'react';


const AdsGrid = ({ ads, ...props }) => {
    const { areFiltersOn, handleFiltersAreOn, handleFiltersAreOff } = useAuthContext()
    const { loading } = useAuthContext()
    const { filters } = useAuthContext()
    const { searchKeys, minPrice, maxPrice, tags } = filters;
    //const { searchKeys } = filter;
    // loading || handleFiltersAreOff()
    console.log("SEARCHA KEYS VALUE", searchKeys)
    console.log("RENDER ADS GRID")

    console.log("keys", searchKeys)

    console.log("minprice", minPrice)
    console.log("tags", tags)

    //const staticsSearchKeys = React.useRef(searchKeys)
    // console.log("staticsSearchKeys", staticsSearchKeys.current)


    /**
     
    
     */
    const validTagsArrays = ads.map(ad =>
        ad.tags.map(tag => (
            tag.includes(tags[0]) || tag.includes(tags[1]) || tag.includes(tags[2])) && true
        ))

    const checkTags = (adTags) => adTags.map(tag => (tag && tags[0] && tag.replaceAll(",", "  ").toLowerCase().includes(tags[0].replaceAll(",", "  "))) || (tag && tags[1] && tag?.replaceAll(",", "  ").includes(tags[1].replaceAll(",", "  "))) || (tag && tags[2] && tag?.includes(tags[2].replaceAll(",", "  "))) && true)


    const validTags = validTagsArrays.map(tagsArray => tagsArray[0])


    // tags.map(tag => (tag.includes(tags[0]) || tag.includes(tags[1]) || tag.includes(tags[2])) && true)
    //((ad.tags[0].includes(tags[0]) || ad.tags.includes(tags[1]) || ad.tags.includes(tags[0]))

    console.log("####################", validTags)
    console.log("####################", validTags.includes(true))

    return (
        <div className="AdsGrid">
            <div className="columns is-multiline is-mobile">
                {/*ads.map(ad => (
                    ad.name.includes(searchKeys) && <AdCard key={ad._id} ad={ad} {...props}></AdCard>
                ))*/}

                {ads.map(ad => (console.log(ad.tags[0].replaceAll(",", " "), ad._id, ad.name)))}
                {ads.map(ad => (console.log(ad)))}
                {ads.map(ad => {
                    if (!tags.length
                        && ((ad.name).replaceAll(",", "  ").toLowerCase().includes((searchKeys.replaceAll(",", "  ").toLowerCase())) || (ad.description.replaceAll(",", "  ").toLowerCase()).includes((searchKeys.replaceAll(",", "  ").toLowerCase())))
                        && ad.sale
                        && (ad.price >= minPrice && ad.price <= maxPrice)
                    ) { return <AdCard key={ad._id} ad={ad} {...props}></AdCard> }
                    if (!tags.length
                        && ((ad.name).replaceAll(",", "  ").toLowerCase().includes((searchKeys.replaceAll(",", "  ").toLowerCase())) || (ad.description.replaceAll(",", "  ").toLowerCase()).includes((searchKeys.replaceAll(",", "  ").toLowerCase())))
                        && !ad.sale
                    ) { return <AdCard key={ad._id} ad={ad} {...props}></AdCard> }
                    if (tags.length
                        && checkTags(ad.tags).includes(true)
                        && ((ad.name).replaceAll(",", "  ").toLowerCase().includes((searchKeys.replaceAll(",", "  ").toLowerCase())) || (ad.description.replaceAll(",", "  ").toLowerCase()).includes((searchKeys.replaceAll(",", "  ").toLowerCase())))
                        && ad.sale
                        && (ad.price >= minPrice && ad.price <= maxPrice)
                    ) { return <AdCard key={ad._id} ad={ad} {...props}></AdCard> }
                    if (tags.length
                        && checkTags(ad.tags).includes(true)
                        && ((ad.name).replaceAll(",", "  ").toLowerCase().includes((searchKeys.replaceAll(",", "  ").toLowerCase())) || (ad.description.replaceAll(",", "  ").toLowerCase()).includes((searchKeys.replaceAll(",", "  ").toLowerCase())))
                        && !ad.sale
                    ) { return <AdCard key={ad._id} ad={ad} {...props}></AdCard> }
                }


                )}

            </div>
        </div>
    )
}

export default AdsGrid