import { Link } from "react-router-dom"
import Button from "../shared/Button"
import LinkButton from "../shared/LinkButton"


const AuthWelcome = () => {

    return (
        <div className="AuthWelcome">
            <div>Bienvenido a wallaKlone</div>
            <div>Regístrate o inicia sesion</div>
            <div className="buttons">
                <LinkButton link='/auth/login'>Inicia sesión</LinkButton>
                <LinkButton link='/auth/register' > Regístrate</LinkButton>
            </div>


        </div>
    )

}

export default AuthWelcome