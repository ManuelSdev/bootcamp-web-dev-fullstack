//import Button from "../../shared/Button"
//import FormField from "../../shared/FormField"
import React from 'react';
import Button from '../../shared/Button';
import FormError from '../../shared/formFields/FormError';
import FormField from '../../shared/formFields/FormField';


const LoginForm = ({ onSubmit, error, isLoading }) => {
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: '',
    });

    //El event lo recibe del onChange ("mezcla" del onchange y del oninput del form html)
    const handleChange = event => {
        /**
         * Usamos spreading para machacar las propiedades el estado a medida que 
         * escribimos en los formfields
         * El <FormField name="email"> machacará la clave email
         * El <FormField name="password"> machacará la clave password
         */
        setCredentials(oldCredentials => {

            // console.log(event.target)
            const newCredentials = {
                ...oldCredentials,
                [event.target.name]: event.target.value,
            };
            return newCredentials;
        });
    };
    /**
     * 
     * Este método sustituye al submit del form 
     * Llamará al método onSubmit (que el padre LoginPage pasa por props) 
     * pasando como parámetro las credentials para que LoginPage las use
     * en su propio método, también llamado handleSubmit, para la péticion
     * de login con el login() que importa de auth.js
     */
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(credentials);
        //console.log("submit")
    };
    const { username, password } = credentials;
    return (
        <form className="loginForm" onSubmit={handleSubmit}>

            <FormField
                className="input"
                type="email"
                name="email"
                label="Correo electrónico"
                placeholder="Dirección de email"
                //onChange={even => console.log(even.target)}
                //handleChange cambia el estado a medida que se escribe 
                onChange={handleChange}
                //value toma el valor que vamos teniendo en el estado
                value={username}
            >
            </FormField>
            <FormField
                className="input"
                type="password"
                name="password"
                label="Contraseña"
                placeholder="Contraseña"
                value={password}
                onChange={handleChange}
            >
            </FormField>
            <Button type="submit" >Iniciar sesión</Button>
            {error && <FormError error={error}></FormError>}
        </form>
    )
}

export default LoginForm