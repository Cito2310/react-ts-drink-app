import { IRespProduct } from './interfaces/IResProduct';

import { BtnToggleSidebar } from './sidebar/BtnToggleSidebar';
import { SideBar } from './sidebar/SideBar';

interface props {
    respProduct: IRespProduct,
    children: JSX.Element
}

export const ProductSection = ({ respProduct, children }: props) => (
    (respProduct.status) 
    ? <div>
        <BtnToggleSidebar/>
        <SideBar/>
        {children}
    </div>

    : <p>Cargando...</p>
)