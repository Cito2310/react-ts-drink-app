// IMPORTS
import { useState } from 'react';
import axios from 'axios';

// helpers
import { useForm } from '../helpers_and_hooks/useForm';
import { checkCreateProduct } from '../helpers_and_hooks/checkCreateProduct';

// interfaces
import { IRespProduct } from '../../interfaces/IResProduct';

// components
import { InputText } from '../components/InputText';
import { InputNumber } from '../components/InputNumber';

// styles
import "../styles/input-style.scss";
import "../styles/form-product.scss";
import { BtnSubmit, LoadingSpinner, TextWarning } from '../components';

// INTERFACE PROPS
interface props {
    respProduct: IRespProduct,
    setRespProduct: React.Dispatch<React.SetStateAction<IRespProduct>>,
}


export const FormNewProduct = ({respProduct, setRespProduct}: props) => {
    // controller form
    const {
        brand,
        category,
        flavor,
        location,
        size,

        formState: formInputs,
        onInputChange,
        onResetForm,
    } = useForm({
        brand: "",
        category: "",
        location: 1,
        flavor: "",
        size: "",
    })

    // state form
    type TFormState = { status: TStatusAvailable , msg: string }
    type TStatusAvailable = "loading" | "error" | "none" | "okey";

    const [formState, setFormState] = useState<TFormState>({status: "none", msg: ""})

    // on submit controller
    const onSubmit = async( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        // check errors in inputs
        if (!checkCreateProduct(formInputs, setFormState)) {
            try {
                setFormState({msg: "", status: "loading"});
                const { data } = await axios.post("https://node-ts-load-drink.onrender.com/api/product", formInputs);
                setRespProduct({...respProduct, data: [...respProduct.data, data]}); 
                onResetForm();
                setFormState({msg: "", status: "none"});

            } catch (error) {
                setFormState({msg: "Ocurrio un error", status: "error"});
            }
        }
    }

    return (
        <form className='form-product' onSubmit={onSubmit}>
            <h2 className='title-form'>NUEVO PRODUCTO</h2>

            <div className='content-form'>
                <InputText label='MARCA' name='brand' value={brand} onInputChange={onInputChange} />
                <InputText label='CATEGORIA' name='category' value={category} onInputChange={onInputChange} />
                <InputText label='SABOR' name='flavor' value={flavor} onInputChange={onInputChange} />
                <InputText label='TAMA??O' name='size' value={size} onInputChange={onInputChange} />
                <InputNumber label='UBICACION' name='location' value={location} onInputChange={onInputChange} />
            </div>

            <div className='footer-form'>
                {
                    (formState.status  === "error") ? <TextWarning msg={formState.msg} />
                    : (formState.status === "loading") ? <LoadingSpinner />
                    : null
                }
                <BtnSubmit />
            </div>

        </form>
    )
}