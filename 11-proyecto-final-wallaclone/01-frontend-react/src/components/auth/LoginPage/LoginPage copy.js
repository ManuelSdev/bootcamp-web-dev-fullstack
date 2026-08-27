import React from 'react';
//import Button from "../../shared/Button"
import LoginForm from "./LoginForm"
import { AuthContextConsumer } from '../auth/context';
import { login } from '../../api/user'

/**
 * 
 * AuthContextProvider "emite" un objeto value={authValue} que captamos con AuthContextConsumer
 * Este tiene tres propiedades
 * Pasamos como parámetro solo las que usamos: onLogin
 * El paso de parámetros anterior es igual que cuando llegan por props que baja el padre
 * 
 */
const LoginPage = () => {
    /*
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    //Esta uso de useRef almacena un valor que persiste mientras no lo cambies
    const isLogged = React.useRef(false);

    const resetError = () => setError(null);

    React.useEffect(() => {
        if (isLogged.current) {
            onLogin();
            const { from } = location.state || { from: { pathname: '/' } };
            //** const from = location.state ? location.state.from : {pathname: '/'}

            history.replace(from);
        }
    });
    */
    //Este método bajará como prop onSubmit a <LoginForm>
    const handleSubmit = async credentials => {
        // login(credentials).then(() => onLogin());
        //resetError();
        //setIsLoading(true);
        console.log("holi")
        try {
            await login(credentials);
            //Los cambios en la referencia no ejectutan un nuevo render
            isLogged.current = true;
        } catch (error) {
            //setError(error);
            window.alert(error)
        } finally {
            //setIsLoading(false);
        }
    };


    //console.log(isLogged)
    return (
        <div className="LoginPage">
            <div className="container">
                <LoginForm isLoading={isLoading} onSubmit={handleSubmit}></LoginForm>
            </div>

        </div>
    )

}
/**
 * en value recibe las propiedades del contexto
 * en props recibe propiedades que puedan llegar desde componentes superiores
 */
const ConnectedLoginPage = props => {
    return (
        <AuthContextConsumer>
            {value => <LoginPage {...value} {...props} />}
        </AuthContextConsumer>
    );
};

export default ConnectedLoginPage;