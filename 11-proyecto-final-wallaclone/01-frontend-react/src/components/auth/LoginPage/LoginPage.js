import React from 'react';
//import Button from "../../shared/Button"
import LoginForm from "./LoginForm"
import { useAuthContext } from '../context';
import { login } from '../../../api/user'
import usePromise from '../../customHooks/usePromise';
import './LoginForm.scss'
import { useHistory, useLocation } from 'react-router-dom';

/**
 * 
 * AuthContextProvider "emite" un objeto value={authValue} que captamos con AuthContextConsumer
 * Este tiene tres propiedades
 * Pasamos como parámetro solo las que usamos: onLogin
 * El paso de parámetros anterior es igual que cuando llegan por props que baja el padre
 * 
 */
const LoginPage = ({ from }) => {

    const { handleLogin } = useAuthContext()
    //No usamos el estado data de usePromise ni le pasamos parametro de valor de estado inicial
    //porque no esperamos recibir datos con la petición de login, salvo el posible error
    const { error, throwPromise, } = usePromise()
    const history = useHistory()

    //** const from = location.state ? location.state.from : {pathname: '/'}

    const handleSubmit = async credentials => {
        await throwPromise(login(credentials));
        handleLogin()
        history.replace(from);
    };

    return (
        <div className="LoginPage">
            <div className="container">
                <LoginForm error={error?.reason} onSubmit={handleSubmit}></LoginForm>
            </div>
        </div>
    )
}

export default LoginPage;