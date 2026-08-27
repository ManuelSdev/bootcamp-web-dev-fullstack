//Este módulo centraliza las llamadas a los anuncios

import client from './client'
import { withFormData } from '../utils/toFormData';

const advertsPath = '/api/v1/adverts';
//Esta ruta es de nodepop-api
const adsBaseUrl = '/api';

export const getAds = () => {
    const url = `${adsBaseUrl}/v1/adverts`;
    return client.get(url);
};

export const getTags = () => {
    const url = `${adsBaseUrl}/v1/adverts/tags`;
    //console.log(client.get(url))
    return client.get(url);
};

export const createAd_NO = adDetails => {
    const url = `${adsBaseUrl}/v1/adverts`;
    return client.post(url, adDetails);
};

export const createAd = withFormData(adDetails => {
    const url = `${adsBaseUrl}/v1/adverts`;
    return client.post(url, adDetails);
});