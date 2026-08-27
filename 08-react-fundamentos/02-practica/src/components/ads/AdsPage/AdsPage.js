import React from 'react';
import { getAds } from '../../../api/ads'
import './AdsPage.css'
import { data } from '../../../data'
import AdsGrid from './AdsGrid'
import Layout from '../../layout/Layout'
import { Redirect } from 'react-router-dom';
const AdsPage = () => {
    const [ads, setAds] = React.useState([]);


    React.useEffect(() => {
        getAds().then(setAds);
    }, []);




    //const foto = data[1].photo;
    //console.log(foto)
    //const ads = data;
    //console.log(ads)
    return (
        <div className="AdsPage">
            <Layout>
                <AdsGrid ads={ads} />

            </Layout>

        </div>

    )

}
/*
                {console.log(' tamañoooo  ', ads.length)}
                {ads.length == 0
                    ? <Redirect to="/adverts/new" />
                    : <AdsGrid ads={ads} />
                }
*/
export default AdsPage