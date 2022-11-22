import { ProviderSideBar } from './sidebar/ProviderSideBarController';

import { BtnToggleSidebar } from './sidebar/BtnToggleSidebar';
import { SideBar } from './sidebar/SideBar';

import "./config.scss"
import { RoutesProduct } from './routes/RoutesProduct';

export const ProductApp = () => {
    return (
        <ProviderSideBar>
            <BtnToggleSidebar/>
            <SideBar/>
            <RoutesProduct/>
        </ProviderSideBar>
    )
}