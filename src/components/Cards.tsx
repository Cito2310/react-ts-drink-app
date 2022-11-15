import { useLayoutEffect } from 'react';
import { IProduct } from '../interfaces/IResProduct';

interface props {
    product: IProduct
}

export const Cards = ( { product }: props ) => {
    return (
        <>
            <div className='container-description'>
                <p>{product.brand}</p>
                <p>SABOR: {product.flavor + " " + product.size} </p>
                <div className='flex-row flex-space-between'>
                    <div className='container-category-location'>
                        <p>CATEGORIA: {product.category} </p>
                        <p>UBICACION &#35;{product.location} </p>
                    </div>
                    <div className='container-button-edit-delete'>
                        <button><i className="fa-solid fa-pen"/></button>
                        <button><i className="fa-solid fa-trash"/></button>
                    </div>
                </div>
            </div>

            <div className='container-button-amount'>
                <i className="fa-solid fa-chevron-up"/>
                <p>{product.amount}</p>
                <i className="fa-solid fa-chevron-down"/>
            </div>
        </>
    )
}
