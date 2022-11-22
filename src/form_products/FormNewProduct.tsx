import axios from 'axios';
import { useForm } from './useForm';
export const FormNewProduct = () => {
    const {
        brand,
        category,
        flavor,
        location,
        size,

        formState,
        onInputChange,
        onResetForm,
    } = useForm({
        brand: "",
        category: "",
        location: "",
        flavor: "",
        size: "",
    })

    const onSubmit = async( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        await axios.post("https://node-ts-load-drink.onrender.com/api/product", formState);
        onResetForm();
    }


    return (
        <form onSubmit={onSubmit}>
            <label>MARCA</label>
            <input value={brand} name="brand" onChange={onInputChange}  />

            <label>SABOR</label>
            <input value={flavor} name="flavor" onChange={onInputChange}  />

            <label>TAMAÑO</label>
            <input value={size} name="size" onChange={onInputChange}  />

            <label>CATEGORIA</label>
            <input value={category} name="category" onChange={onInputChange}  />

            <label>UBICACION</label>
            <input value={location} name="location" onChange={onInputChange}  />

            <input type="submit" />
        </form>
    )
}