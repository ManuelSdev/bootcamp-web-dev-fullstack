import Button from "../../shared/Button"
import FormField from "../../shared/FormField"
import React from 'react';
import { createAd } from '../../../api/ads'
const NewAdForm = ({ tags, onSubmit }) => {
    const [details, setCredentials] = React.useState({
        name: '',
        sale: false,
        price: 1,
        tags: [],
        photo: null

    });
    const arra = React.useRef([])

    //El event lo recibe del onChange ("mezcla" del onchange y del oninput del form html)
    const handleChange = event => {
        setCredentials(oldDetails => {
            if (event.target.type == 'checkbox') {
                console.log(event.target.checked)
                console.log(event.target.type)
                if (arra.current.includes(event.target.value)) {
                    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
                    const index = arra.current.indexOf(event.target.value);
                    arra.current.splice(index, 1);
                } else {
                    arra.current.push(event.target.value)
                }
                //console.log(arra)
            }

            const newDetails = {
                ...oldDetails,
                // [event.target.name]: event.target.value,
                [event.target.name]: event.target.type !== 'checkbox' ? event.target.value : arra.current
            };
            return newDetails;
        });
    };

    const test = {
        name: 'aaaaa',
        sale: false,
        price: 1000,
        tags: ["mobile"],
        photo: null
    }
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(test);
        console.log(test)
    };
    //console.log(event.target.value)
    console.log(details)
    console.log(arra.current)
    const { name, price } = details;
    return (
        <form className="has-text-left" onSubmit={handleSubmit}>
            <FormField
                className="input"
                labelClassName="label"
                type="text"
                name="name"
                label="¿Qué vas a vender?"

                onChange={handleChange}
                value={name}
            >
            </FormField>
            <FormField
                className="input"
                labelClassName="label"
                type="text"
                name="price"
                label="Ponle un precio"
                onChange={handleChange}
                value={price}
            >
            </FormField>
            <p className="label">¿Compras o vendes?</p>
            <FormField
                type="radio"
                name="sale"
                label="Comprar"
                onChange={handleChange}
                value={true}
            >
            </FormField>
            <FormField
                type="radio"
                name="sale"
                label="Vender"
                onChange={handleChange}
                value={false}
            >
            </FormField>
            <p className="label">Selecciona al menos una etiqueta</p>
            {tags.map(tag => (
                <FormField
                    labelClassName="checkbox"
                    type="checkbox"
                    label={`${tag} `}
                    name="tags"
                    onChange={handleChange}
                    value={`${tag} `}
                >
                </FormField>
            ))
            }
            <Button
                //El submit será el onSubmit={handleSubmit}
                type="submit"
            >
                Crear anuncio</Button>

        </form >
    )
}

export default NewAdForm