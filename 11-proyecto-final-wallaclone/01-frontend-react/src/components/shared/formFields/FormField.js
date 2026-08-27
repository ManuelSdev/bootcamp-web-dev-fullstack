

const FormField = ({ label, ...props }) => {

    return (
        <div className="field" >
            <div className="control">
                <label className="label" >{label}
                    <input className="input"
                        // autoComplete="off"
                        {...props}
                    />
                </label>
            </div>
        </div>
    )
}

export default FormField

