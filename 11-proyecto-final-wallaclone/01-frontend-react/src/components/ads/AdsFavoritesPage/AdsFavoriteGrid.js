
import AdFavoriteCard from "./AdFavoriteCard"

const AdsFavoriteGrid = ({ ads, ...props }) => {
    return ads[0] ? (
        <div className="AdsFavoriteGrid">
            <div className="columns is-multiline is-mobile">
                {ads.map(ad => (
                    <AdFavoriteCard key={ad._id} ad={ad} {...props}></AdFavoriteCard>
                ))}
            </div>
        </div>
    ) : (
        <div>AUN NO TIENES ANUNCIOS FAVORITOS</div>
    )
}

export default AdsFavoriteGrid
//