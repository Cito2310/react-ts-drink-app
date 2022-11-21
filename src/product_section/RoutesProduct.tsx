import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

import { IRespProduct } from '../interfaces/IResProduct';

import { ProductSection } from './ProductSection';

export const RoutesProduct = () => {
  const [respProduct, setRespProduct] = useState<IRespProduct>({status: false, data: []})
  
  useEffect(() => {
    const getProduct = async() => {
      const { data } = await axios.get("https://node-ts-load-drink.onrender.com/api/product")
      return data;
    }
    getProduct()
          .then( data => {  setRespProduct({ status: true, data })   })
          .catch(console.error)
  }, [])

  return (
    <Routes>
      <Route path='/card-product' element={<ProductSection respProduct={respProduct} typeProduct="card" />} />
      <Route path='/list-product' element={<ProductSection respProduct={respProduct} typeProduct="list" />} />

      <Route path='/*' element={<Navigate to="/card-product" />} />
    </Routes>
  )
}