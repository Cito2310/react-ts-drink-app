// IMPORTS
  // basic
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

  // interfaces and types
import { IRespProduct } from './interfaces/IResProduct';

  // components
import { FormNewProduct } from './form_products/screen/FormNewProduct';
import { FormModifyProduct } from './form_products/screen/FormModifyProduct';
import { GridList } from './grid_list/GridList';
import { GridCards } from './grid_cards/GridCards';
import { ProviderSideBar } from './sidebar/ProviderSideBarController';

  // style config
import "./config.scss"
import { ProductSection } from './ProductSection';



export const RoutesProductApp = () => {
  const [respProduct, setRespProduct] = useState<IRespProduct>({status: false, data: []})
  
  useEffect(() => {
    const getProduct = async() => {
      const { data } = await axios.get("https://node-ts-load-drink.onrender.com/api/product");
      return data;
    }
    getProduct()
          .then( data => {  setRespProduct({ status: true, data })   })
          .catch(console.error)
  }, [])

  return (
    <ProviderSideBar>
      <Routes>

        <Route path='/card-product' element={
          <ProductSection respProduct={respProduct}>
            <GridCards products={respProduct.data}/>
          </ProductSection>
        }/>

        <Route path='/list-product' element={
          <ProductSection respProduct={respProduct}>
            <GridList products={respProduct.data}/>
          </ProductSection>
        } />

        <Route path='/create-product' element={
          <ProductSection respProduct={respProduct}>
            <FormNewProduct respProduct={respProduct} setRespProduct={setRespProduct} />
          </ProductSection>
        } />

        <Route path='/modify-product/:id' element={
          <ProductSection respProduct={respProduct}>
            <FormModifyProduct respProduct={respProduct} setRespProduct={setRespProduct} />
          </ProductSection>
        } />

        <Route path='/*' element={<Navigate to="/card-product" />} />

      </Routes>
    </ProviderSideBar>
  )
}