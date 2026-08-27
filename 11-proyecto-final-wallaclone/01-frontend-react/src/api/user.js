import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

const userPath = '/apiv1/users';
const createUserPath = `${userPath}/register`
const loginPath = `${userPath}/login`
const adFavoritePath = `${userPath}/`

export const createUser = userData => {
    return client.post('/apiv1/users/register', userData)
}


export const login = credentials => {
    //console.log('credentials', credentials)
    return client.post('/apiv1/users/login', credentials).then(({ accessToken }) => {
        //console.log('token', { accessToken })
        // console.log('token2', accessToken)
        configureClient({ accessToken });
        // console.log(client.defaults.headers)
        storage.set('auth', accessToken);
    });
};

export const logout = () => {
    return Promise.resolve().then(() => {
        resetClient();
        storage.remove('auth');
    });
};

export const getUserByName = (userName) => {
    //${filterPath && filterPath}
    return client.get(`${userPath}/${userName}`);
};


export const modFavoriteId = (adId) => {
    //${filterPath && filterPath}
    return client.post(`${userPath}/fav`, adId);
};
export const pushFavId = (adId) => {
    //${filterPath && filterPath}
    return client.put(`${userPath}/fav`, adId);
};
export const updateFavId = (adIdParams, action) => {
    //${filterPath && filterPath}
    return client.put(`${userPath}/${adIdParams}`, action);
};

export const getFavoritesIds = () => {
    //${filterPath && filterPath}
    return client.get(`${userPath}/fav`);
};
