import { useEffect, useState } from 'react';
import axios from 'axios';

import { IRespProduct } from '../interfaces/IResProduct';
import { Cards } from './Cards';

import "./grid-cards-products.scss"

export const GridCards = () => {
    const [respProduct, setRespProduct] = useState<IRespProduct>({status: false, data: []})

    useEffect(() => {
        const getProduct = async() => {
            const { data } = await axios.get("https://node-ts-load-drink.onrender.com/api/product")
            return data;
        }
        getProduct()
            .then( data => {  setRespProduct({ status: true, data })  })
            .catch(console.error)
    }, [])

    return (
        <section id='grid-cards-products'>
            {( respProduct.status ) ? respProduct.data.map(product => <Cards key={product._id} product={product}/>) : <h1>Cargando...</h1> }
        </section>
    )
}