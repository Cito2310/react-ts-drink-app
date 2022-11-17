import { GridCards } from './components/GridCards';

import "./config.scss"
import { ProviderSideBar } from './sidebar/ProviderSideBarController';
import { BtnToggleSidebar } from './sidebar/BtnToggleSidebar';
import { SideBar } from './sidebar/SideBar';

export const ProductApp = () => {
    return (
        <ProviderSideBar>
            <BtnToggleSidebar/>
            <SideBar/>
            <GridCards/>
        </ProviderSideBar>
    )
}