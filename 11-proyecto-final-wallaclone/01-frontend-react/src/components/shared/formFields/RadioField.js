
const RadioField = ({ children, mainLabel }) => {

    return (
        <div className="field">
            <label className="label  mb-auto">{mainLabel}

            </label>
            <div className="control">
                {children}
            </div>
        </div>
    )

}





export default RadioField