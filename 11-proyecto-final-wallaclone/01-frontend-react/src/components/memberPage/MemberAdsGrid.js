import AdCard from "../ads/adsPage/AdCard"


const MemberAdsGrid = ({ ads, ...props }) => {

    return (
        <div className="AdsGrid">
            <div className="columns is-multiline is-mobile">
                {ads.map(ad => (
                    <AdCard key={ad._id} ad={ad} {...props}></AdCard>
                ))}
            </div>
        </div>
    )
}

export default MemberAdsGrid