//import Button from "../../shared/Button"
//import FormField from "../../shared/FormField"
import React from 'react';
import FormField from '../../shared/formFields/FormField';
import Button from '../../shared/Button';
import FormError from '../../shared/formFields/FormError';
const RegisterForm = ({ onSubmit, error, isLoading }) => {
    const [credentials, setCredentials] = React.useState({
        username: '',
        email: '',
        password: '',
    });

    //El event lo recibe del onChange ("mezcla" del onchange y del oninput del form html)
    const handleChange = event => {
        setCredentials(oldCredentials => {
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
    const { username, email, password } = credentials;
    return (
        <div className="container">
            <form className="registerForm" onSubmit={handleSubmit}>
                <FormField
                    className="input"
                    type="text"
                    name="username"
                    label="Nombre y apellido"
                    onChange={handleChange}
                    value={username}
                >
                </FormField>
                <FormField
                    className="input"
                    type="email"
                    name="email"
                    label="Correo electrónico"
                    placeholder="Dirección de email"
                    onChange={even => console.log(even.target.value)}
                    onChange={handleChange}
                    //value toma el valor que vamos teniendo en el estado
                    value={email}
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
                <Button
                    //El submit será el onSubmit={handleSubmit}
                    type="submit"
                >
                    Crear una cuenta</Button>
                {error && <FormError error={error}></FormError>}
            </form>
        </div>
    )
}

export default RegisterForm