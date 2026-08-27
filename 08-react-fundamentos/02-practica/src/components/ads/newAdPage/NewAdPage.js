import Layout from "../../layout/Layout"
import { createAd, getTags } from '../../../api/ads'
import React from 'react';
import NewAdForm from "./NewAdForm";


const NewAdPage = () => {
    const [tags, setTags] = React.useState([]);

    React.useEffect(() => {
        getTags().then(setTags);
    }, []);
    //Este método bajará como prop onSubmit a <LoginForm>
    const handleSubmit = async details => {
        // login(credentials).then(() => onLogin());
        // resetError();
        // setIsLoading(true);
        console.log("holi", details)
        try {
            await createAd(details);
            //Los cambios en la referencia no ejectutan un nuevo render
            //isLogged.current = true;
        } catch (error) {
            //setError(error);
            window.alert(error)

        } finally {
            console.log('anuncio creado')
        }
    };



    console.log(tags)
    return (
        <Layout>
            <NewAdForm tags={tags} onSubmit={handleSubmit} />
        </Layout>
    )
}

export default NewAdPage