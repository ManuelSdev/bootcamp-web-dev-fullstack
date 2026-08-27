import { logout } from '../../../api/auth';
import { AuthContextConsumer } from "../context"
import Button from "../../shared/Button"
const AuthButton = ({ isLogged, onLogout }) => {
    const handleLogoutClick = () => {
        logout().then(onLogout);
    };
    /**
     * Podemos llamar "props" a esta variable porque AuthButton no recibe
     * ningún parámetro con ese nombre.
     * El objeto que contiene props dependerá del valor de isLogged. Esto implica
     * que, por ejemplo, el texto del botón se resueve aquí, no viene desde una
     * prop del padre como ocurre con los Button´s normales
     * Despues, lo bajamos a Button haciendo spreading para bajar las propiedades
     * directamente, en lugar del objeto en sí
     */

    /**
     * Esto es así en el código de David pero, en realidad, aquí no hace falta
     * la condición isLogged porque  layout estará en una ruta privada y solo aparecerá
     * con isLogged=true...no hay caso de uso para ver un layout(header(authbutton))
     * cuando isLogged=false
     */
    //TODO: Replantear sabiendo lo anterior
    const props = isLogged
        ? { onClick: handleLogoutClick, children: 'Log out' }
        : {/*
            as: Link,
            to: '/login',
            */
            children: 'Log in'

        };



    return (
        <Button
            {...props}
        ></Button>
    )
}

const ConnectedAuthButton = props => {
    return (
        /**
         *  El children del context.consumer no es un componente.
         * es una función que recibe las props del contexto (value)
         * y retorna el componente que renderiza con las props que elija
         * del contexto y otras que le puedan llegar como props "normales",
         * que son las que entran como parámetro a const ConnectedAuthButton.
         * 
         * Adaptamos las props del contexto a la sintaxis que teniamos en 
         * los parámetros de entrada de  const AuthButton. Si aquí entraban/entran 
         * como isLogged y onLogout, pasamos las propiedades equivalentes
         * del objeto value con esos mismos nombres (ej isLogged={value.isLogged} )
         * 
         * Tambien pasamos 
         * 
         */

        <AuthContextConsumer>
            {value => {
                return (
                    <AuthButton
                        isLogged={value.isLogged}
                        onLogout={value.onLogout}
                        {...props}
                    />
                );
            }}
        </AuthContextConsumer>
    )

}

export default ConnectedAuthButton;