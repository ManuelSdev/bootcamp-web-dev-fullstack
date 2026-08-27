

const CheckBoxGroup = ({ options, value, onChange, ...props }) => {
    const handleChange = ev => {
        const { name, checked, value: optionValue } = ev.target;
        onChange({
            target: {
                name,
                value: checked
                    ? [...value, optionValue]
                    : value.filter(v => v !== optionValue),
            },
        });
    };

    return (
        <div className="field is-grouped">
            {options.map(option => (
                <div className="control" key={option}>
                    <label className="checkbox">{option}{" "}
                        <input
                            type="checkbox"
                            value={option}
                            checked={value.includes(option)}
                            onChange={handleChange}
                            {...props}
                        />
                    </label>
                </div>
            )
            )}

        </div>
    )
}

export default CheckBoxGroup
