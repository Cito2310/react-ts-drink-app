interface props {
    label: string,
    value: number,
    name: string,
    onInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputNumber = ({ label, value, name, onInputChange }: props) => (
    <div className="div-input div-input-number">
        <label>{label}</label>
        <input type="number" value={value} name={name} onChange={onInputChange} min={0} max={50}  />
    </div>
)