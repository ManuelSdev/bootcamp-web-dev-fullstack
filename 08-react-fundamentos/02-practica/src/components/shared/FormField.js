

const FormField = ({ inputClassName, labelClassName, label, ...props }) => {


    return (

        props.type === "radio" ? (
            <label className="radio" >
                <input
                    // autoComplete="off"
                    {...props}
                />
                {/*console.log(typeof props.value)*/}
                {label}
            </label>
        ) : (
            <div className="field" >
                <div className="control">
                    <label className={labelClassName}>{label}
                        <input

                            // autoComplete="off"
                            {...props}
                        />
                    </label>
                </div>
            </div>
        )

    )


}

export default FormField


