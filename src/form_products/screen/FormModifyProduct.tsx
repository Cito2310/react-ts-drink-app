// IMPORTS
import { useState } from 'react';
import axios from 'axios';

// helpers
import { useForm } from '../helpers_and_hooks/useForm';
import { checkModifyProduct } from '../helpers_and_hooks/checkModifyProduct';

// interfaces
import { IRespProduct } from '../../interfaces/IResProduct';

// components
import { BtnSubmit, LoadingSpinner, TextWarning, InputNumber, InputText } from '../components';

// styles
import "../styles/input-style.scss";
import "../styles/form-product.scss";

// INTERFACE PROPS
interface props {
    respProduct: IRespProduct,
    setRespProduct: React.Dispatch<React.SetStateAction<IRespProduct>>,
}


export const FormModifyProduct = ({respProduct, setRespProduct}: props) => {
    const idParams = window.location.pathname.split("/")[2]
    const productModify = respProduct.data.filter( product => product._id === idParams)[0]

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
        brand: productModify.brand,
        category: productModify.category,
        location: productModify.location,
        flavor: productModify.flavor,
        size: productModify.size,
    })

    // state form
    type TFormState = { status: TStatusAvailable , msg: string }
    type TStatusAvailable = "loading" | "error" | "none" | "okey";

    const [formState, setFormState] = useState<TFormState>({status: "none", msg: ""})

    // on submit controller
    const onSubmit = async( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        // check errors in inputs
        if (!checkModifyProduct(formInputs, setFormState, productModify)) {
            try {
                setFormState({msg: "", status: "loading"});
                const { data } = await axios.put(`https://node-ts-load-drink.onrender.com/api/product/${productModify._id}`, formInputs);
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
                <InputText label='TAMAÑO' name='size' value={size} onInputChange={onInputChange} />
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