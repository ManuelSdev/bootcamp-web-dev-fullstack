

const RadioButton = ({ label, ...props }) => {

    return (
        <label className="radio">
            <input type="radio"
                {...props}
            />
            {label}
        </label>
    )

}





export default RadioButton