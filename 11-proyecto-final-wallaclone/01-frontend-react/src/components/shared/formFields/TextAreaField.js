

const TextAreaField = ({ label, ...props }) => {

    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <textarea className="textarea" {...props}></textarea>
            </div>
        </div>
    )
}

export default TextAreaField