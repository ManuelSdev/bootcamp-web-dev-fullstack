//import Button from "../../shared/Button"
//import FormField from "../../shared/FormField"
import React from 'react';
import useForm from '../../customHooks/useForm';
import Button from '../../shared/Button';
import CheckBoxGroup from '../../shared/formFields/CheckBoxGroup';
import FormField from '../../shared/formFields/FormField';
import RadioButton from '../../shared/formFields/RadioButton';
import RadioField from '../../shared/formFields/RadioField';
import SelectTags from '../../shared/formFields/SelectTags/SelectTags';
import TextAreaField from '../../shared/formFields/TextAreaField';
import InputFile from '../../shared/formFields/InputFile';
import FormError from '../../shared/formFields/FormError';


const AdForm = ({ onSubmit, error, ad }) => {
    // console.log("RENDER EN AD FORM")
    //console.log("primer ad", ad)
    const { formValue: advert, handleChange, handleSubmit, validate, setFormValue } = useForm({
        name: '',
        sale: true,
        price: "",
        tags: [],
        description: '',
        images: null,
    });



    //useEffect solo aplica cuando recibimos la props "ad" que pasa EditAdPage.js, que usa este mismo
    //formulario para editar los detalles del anuncio
    //

    React.useEffect(() => {
        //console.log("useEffect ad", ad)
        ad &&
            setFormValue(
                {
                    name: ad?.name ?? '',
                    sale: ad?.sale ?? true,
                    price: ad?.price ?? '',
                    tags: ad?.tags ?? [],
                    description: ad?.description ?? '',
                    images: null
                }
            )
    }, [ad])

    const { name, sale, price, tags, description } = advert;

    // console.log("FORMULARIO", advert)
    return (
        <form className="AdForm" onSubmit={handleSubmit(onSubmit)}>
            <FormField
                type="text"
                name="name"
                label={sale ? "¿Qué vas a vender?" : "¿Qué estás buscando?"}
                //placeholder="¿Qué vas a vender?"
                //onChange={even => console.log(even.target)}
                //handleChange cambia el estado a medida que se escribe 
                onChange={handleChange}
                //value toma el valor que vamos teniendo en el estado
                value={name}
            >
            </FormField>
            {sale &&
                <FormField
                    type="number"
                    name="price"
                    label="Precio"
                    value={price}
                    //min="1"
                    //step="any"
                    onChange={handleChange}
                >
                </FormField>
            }
            <SelectTags multiple name="tags" value={tags} onChange={handleChange} mainLabel="Selecciona,al menos, un tag" />

            <RadioField mainLabel="¿Vendes o compras?">
                <RadioButton
                    // checked={[sale]}
                    name="sale"
                    label=" Vender"
                    onChange={handleChange}
                    checked={sale}
                    value="sell"
                >

                </RadioButton>
                <RadioButton
                    name="sale"
                    label=" Comprar"
                    onChange={handleChange}
                    checked={!sale}
                    value="buy"
                ></RadioButton>

            </RadioField>

            <TextAreaField
                label="Descripción"
                placeholder="Añade información relevante como estado, modelo, color..."
                name="description"
                onChange={handleChange}
                value={description}
            >
            </TextAreaField>
            {sale && <InputFile name="images" onChange={handleChange} />}

            <Button type="submit" >Subir anuncio</Button>
            {error && <FormError error={error}></FormError>}



        </form >

    )
}

export default AdForm


