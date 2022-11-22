import axios from 'axios';

import { useForm } from './useForm';

import { IRespProduct } from '../interfaces/IResProduct';
import { InputText } from './InputText';

interface props {
    respProduct: IRespProduct,
    setRespProduct: React.Dispatch<React.SetStateAction<IRespProduct>>,
}

export const FormNewProduct = ({respProduct, setRespProduct}: props) => {
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
        const { data } = await axios.post("https://node-ts-load-drink.onrender.com/api/product", formState);
        setRespProduct({...respProduct, data: [...respProduct.data, data]})
        onResetForm();
    }

    return (
        <form onSubmit={onSubmit}>
            <InputText label='MARCA' name='brand' value={brand} onInputChange={onInputChange} />
            <InputText label='SABOR' name='flavor' value={flavor} onInputChange={onInputChange} />
            <InputText label='TAMAÑO' name='size' value={size} onInputChange={onInputChange} />
            <InputText label='CATEGORIA' name='category' value={category} onInputChange={onInputChange} />
            <InputText label='UBICACION' name='location' value={location} onInputChange={onInputChange} />

            <input className="input-submit" type="submit" />
        </form>
    )
}