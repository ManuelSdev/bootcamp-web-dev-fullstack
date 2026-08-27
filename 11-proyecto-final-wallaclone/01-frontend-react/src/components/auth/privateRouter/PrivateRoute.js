

import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context';

const PrivateRoute = props => {
    const { isLogged } = useAuthContext();
    const location = useLocation();
    const history = useHistory()
    //console.log("LOCATION EN PRIVATE", location)
    //console.log("HISTORY EN PRIVATE ROUTER*******************", history)

    /**
     * Si estás logado, devuelve un Route normal
     * si no, redirect. La propiedad to de Redirect
     * recibe un objeto con dos propiedades
     * - propiedad pathname: redirección declarativa, pone la url para que un Route haga match
     * - propiedad objeto state
     *      -metemos propiedad from (nombre random) con valor location(esta es una de las 3 routerProps que iyecta Route):
     *       es de donde venimos (la 
     *       url de la página privada a la que quisiste acceder y por no estar logado
     *       se te hizo la redirección al pathname)
     * Entonces, si intentas acceder a la url X sin estar logado, en ese momento location está almacenando
     * esa url X. La guardamos en la propiedad from
     * Cuando te logues, se te rededirecciona al pathName /login
     * Route path="/login" renderizará el componente LoginPage
     * En LoginPage necesitaremos usar las routerProps location y history
     *     -location: 
     *          -Su propiedad pathName almacena siempre la url actual, que en LoginPage será --/login
     *          -Tambien tendrá el objeto state, que no debería ser undefined porque abajo le estamos 
     *           definiendo la propiedad from con el locatión al que intentamos acceder sin estar logados
     *      -history: almacena el historial de navegación. Usaremos su propiedad replace para machacar
     *        la última entrada/url, que es paso por el /login, con la url que guardamos en la propiedad
     *        state.from. Así, si hacemos go back desde LoginPage, no volveremos al login, iremos
     *         a la url desde la que fuimos al login por no estar logados
     * LoginPage baja por props el metódo handleSubmit que se activa al enviar el LoginForm. Este método
     * lanza la petición de login que importa LoginPage desde /api/user.js. Es este mismo método el que 
     * debe manejar location y history
     */
    return isLogged ? (
        <Route {...props} />
    ) : (
        <Redirect to={{ pathname: '/auth', state: { from: location } }} />
    );
};

export default PrivateRoute;
