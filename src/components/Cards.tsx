import { useLayoutEffect } from 'react';
import { IProduct } from '../interfaces/IResProduct';

import "../style/cards.scss"

interface props {
    product: IProduct
}

export const Cards = ( { product }: props ) => {
    return (
        <div className='card-container'>
            <div className='container-description'>

                <p className='text-brand-card'>{product.brand}</p>
                <p className='text-flavor-card'><b>SABOR:</b> {product.flavor + " " + product.size} </p>

                <div className='container-button-and-category-location'>
                    <div className='container-category-location'>
                        <p className='text-category-card'><b>CATEGORIA:</b> {product.category} </p>
                        <p className='text-location-card'>UBICACION &#35;{product.location}</p>
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
        </div>
    )
}
