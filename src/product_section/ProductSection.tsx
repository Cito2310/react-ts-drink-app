import { useState, useEffect } from 'react';
import axios from 'axios';

import { IRespProduct } from '../interfaces/IResProduct';

import { GridCards } from '../grid_cards/GridCards';
import { GridList } from '../grid_list/GridList';

export const ProductSection = () => {
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
        (respProduct.status) 
        // ? <GridCards products={respProduct.data}/>
        ? <GridList products={respProduct.data}/>
        : <p>Cargando...</p>
    )
}