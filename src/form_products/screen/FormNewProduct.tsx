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

// assets
import loaderThreeDots from "../assets/loader-three-dots.svg"

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

        formState,
        onInputChange,
        onResetForm,
    } = useForm({
        brand: "",
        category: "",
        location: 1,
        flavor: "",
        size: "",
    })

    // state error
    const [stateError, setStateError] = useState({status: false, msg: ""})

    // state loading request
    const [statusLoading, setStatusLoading] = useState(false)

    // on submit controller
    const onSubmit = async( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        // check errors in inputs
        if (!checkCreateProduct(formState, setStateError)) {
            try {
                setStateError({msg: "", status: false}) // remove error advert
                setStatusLoading(true); // init loading spinner
                const { data } = await axios.post("https://node-ts-load-drink.onrender.com/api/product", formState); // init resp data
                setRespProduct({...respProduct, data: [...respProduct.data, data]}); 
                setStatusLoading(false); // remove loading spinner
                onResetForm(); // clear form
            } catch (error) {
                setStatusLoading(false); // remove loading spinner
                setStateError({msg: "Ocurrio un error", status: true}) // add error advert
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
                {(stateError.status) ? <p className='text-warning'>{stateError.msg}</p> : null}
                {(statusLoading) ? <i className="fa-solid fa-spinner"/> : null}
                <input className="input-submit" value="Crear" type="submit"  />
            </div>


        </form>
    )
}