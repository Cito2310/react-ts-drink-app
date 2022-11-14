import { Routes, Route, Navigate } from 'react-router-dom'
import { MainScreen } from './main_screen/MainScreen';
import { NewProductScreen } from './new_product_screen/NewProductScreen';


export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainScreen/>} />
                <Route path='/create-product' element={<NewProductScreen/>} />

                <Route path='/*' element={<Navigate to={"/"}/>}/>
            </Routes>
        </>
    )
}