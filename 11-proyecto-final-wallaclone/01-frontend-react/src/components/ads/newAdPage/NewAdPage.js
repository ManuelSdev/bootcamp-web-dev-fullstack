import { createAd } from "../../../api/ads"
import ModalWindow from "../../shared/modalWindow/ModalWindow";
import style from './NewAdPage.module.scss'
import { useAuthContext } from "../../auth/context";
import Layout from "../../layout/Layout";
import { useHistory } from "react-router-dom";
import AdForm from "./AdForm";
import usePromise from "../../customHooks/usePromise";

//TODO: MANEJO ERRORES
const NewAdPage = () => {
    const history = useHistory()
    const { error, throwPromise, } = usePromise()
    /*
        const handleSubmit = async newAd => {
            try {
                await createAd(newAd);
                history.push("/user");
            } catch (error) {
                //setError(error);
                window.alert("ha ocurrido un error, vuela a intentarlo")
                console.log(error)
            } finally {
                //setIsLoading(false);
            }
        };
    */
    const handleSubmit = async newAd => {
        await throwPromise(createAd(newAd));
        history.push("/user");
    };
    return (
        <Layout>
            <div className={style.NewAdPage}>
                <div className={style.container}>
                    <AdForm error={error?.reason} onSubmit={handleSubmit}></AdForm>
                </div>
            </div>
        </Layout>
    )
}

export default NewAdPage




