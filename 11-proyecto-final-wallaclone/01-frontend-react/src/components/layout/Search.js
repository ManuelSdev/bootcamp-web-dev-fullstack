
import { getAds } from "../../api/ads";
import { useAuthContext } from "../auth/context";
import usePromise from "../customHooks/usePromise";
import Button from "../shared/Button";
import FormField from "../shared/formFields/FormField"
import SelectTags from "../shared/formFields/SelectTags/SelectTags";



const Search = ({ onSubmit }) => {
    const { handleChange, handleSubmit, validate, setFormValue, filters } = useAuthContext()
    const { areFiltersOn, handleFiltersAreOn, handleFiltersAreOff } = useAuthContext();
    const { searchKeys, tags } = filters;
    //searchKeys === "" || handleFiltersAreOn()

    return (
        <div className="Search is-flex-grow-1	">
            <form className="field has-addons " onSubmit={onSubmit}>
                <div className="control is-expanded">

                    <FormField
                        type="text"
                        name="searchKeys"
                        //placeholder="¿Qué vas a vender?"
                        //onChange={even => console.log(even.target)}
                        //handleChange cambia el estado a medida que se escribe
                        onChange={handleChange}
                        //value toma el valor que vamos teniendo en el estado
                        value={searchKeys}
                    >
                    </FormField>

                </div>
                {/*<Button type="submit" >Buscar</Button>*/}


            </form>
            {/* <Button onClick={s}>SSSSSSSSSSS</Button>*/}
        </div >



    )


}

export default Search