import { ProviderSideBar } from './sidebar/ProviderSideBarController';

import { BtnToggleSidebar } from './sidebar/BtnToggleSidebar';
import { SideBar } from './sidebar/SideBar';
import { ProductSection } from './product_section/ProductSection';

import "./config.scss"

export const ProductApp = () => {
    return (
        <ProviderSideBar>
            <BtnToggleSidebar/>
            <SideBar/>
            <ProductSection/>
        </ProviderSideBar>
    )
}