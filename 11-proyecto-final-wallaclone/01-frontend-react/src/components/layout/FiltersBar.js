import { useAuthContext } from "../auth/context"
import FormField from "../shared/formFields/FormField"
import SelectTags from "../shared/formFields/SelectTags/SelectTags"
import SortButton from "./filtersButtons/SortButton"


const FiltersBar = () => {

    const { handleChange, handleSubmit, validate, setFormValue, filters } = useAuthContext()
    const { tags, maxPrice, minPrice } = filters
    return (
        <nav className="navbar  ">
            <div className="navbar-menu">
                <div className="navbar-start	">
                    <div className="navbar-item">
                        <div>Precio mínimo</div>
                        <FormField
                            type="tel"
                            name="minPrice"
                            // label="Precio desde"
                            value={minPrice}
                            //min="1"
                            //step="10"
                            onChange={handleChange}
                        >
                        </FormField>
                    </div>

                    <div className="navbar-item">
                        <div>Precio máximo</div>
                        <FormField
                            type="tel"
                            name="maxPrice"
                            // label="Precio desde"
                            value={maxPrice}
                            //min="1"
                            //step="10"
                            onChange={handleChange}
                        >
                        </FormField>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <SelectTags multiple name="tags" value={tags} onChange={handleChange} />
                    </div>
                </div>
            </div>
        </nav >
    )



}

export default FiltersBar

/*
const Search = () => {
    return (
        <div className="Search is-flex-grow-1	">

            <div className="field has-addons">


                    <input className="input" type="text" placeholder="Busca en todas las categorías" />
                </div>
                <div className="control ">
                    <a className="button is-info">
                        Buscar
                    </a>
                </div>
            </div>
        </div>
    )

}
*/