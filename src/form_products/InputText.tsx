interface props {
    label: string,
    value: string,
    name: string,
    onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputText = ({ label, value, name, onInputChange }: props) => (
    <div className="div-input div-input-text">
        <label>{label}</label>
        <input type="text" value={value} name={name} onChange={onInputChange}  />
    </div>
)
