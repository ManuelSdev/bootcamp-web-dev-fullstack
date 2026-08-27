import { data } from '../../../data'
import Ad from './Ad'
import './AdsGrid.css'
const AdsGrid = ({ ads }) => {
    //const ads = getAds();
    //const ae = ads;
    //const foto = ads[1].photo;
    //console.log(ads)
    const returnElements = function (array) {
        for (let i = 0; i < array.length; i++) {
            // console.log(array[i])
            return array[i];
        }
    }
    //Si hay menos de 4 anuncios, queremos una columna. Para más de 4, queremos una columna nueva cada 4 anuncios
    const numberOfRows = (ads) => {
        if (ads.length < 4) {
            return 1;
        } else if (ads.length % 4 === 0) {
            return ads.length / 4;
        } else {
            return 1 + Math.floor(ads.length / 4);
        }
    }
    const sReturn = function (a) {
        console.log(a)
        return a
    }


    const createRows = (ads) => {
        let maxFourColumns = new Array();

        //Nuevo array de columnas bulma donde cada una contiene un componente <Ad> que recibe un ad/anuncio como prop
        const conlumns = ads.map(() => (
            <div className="column is-one-quarter">
                <Ad ></Ad>
            </div>
        ))
        //console.log(ads)
        //console.log(conlumns[0])
        //Retorna filas (con estructura de columnas bulma) con un máximo de 4 columnas bulma. 
        for (let i = 0; i < numberOfRows(ads); i++) {
            //console.log(i)
            // console.log(numberOfRows(ads))
            //console.log(conlumns)
            maxFourColumns = conlumns.splice(0, 4);
            // console.log(conlumns)
            //console.log(maxFourColumns)
            let row = (
                <div className="columns ">
                    { returnElements(maxFourColumns)}
                </div>
            )
            //console.log(row)
            sReturn(row)
        }
    }
    const maxFourAds = new Array();
    const cRows = (ads) => {

        let i = 0;
        //Nuevo array de columnas bulma donde cada una contiene un componente <Ad> que recibe un ad/anuncio como prop
        const columns = ads.map((ad) => (
            <div key={ad.id} className="column is-one-quarter">
                <Ad ></Ad>
            </div>
        ))
        while (i < numberOfRows(ads)) {
            maxFourAds.push(
                <div key={i} className="columns ">
                    {columns.splice(0, 4).map(fourColums => fourColums)}
                </div>
            )
            i++;
        }
    }

    return (
        <div className="AdsGrid">
            <main className="ads-custom-grid">
                {ads.map(ad => (
                    <Ad key={ad.id} ad={ad} ></Ad>
                ))}
            </main>


        </div>
    )

}

export default AdsGrid