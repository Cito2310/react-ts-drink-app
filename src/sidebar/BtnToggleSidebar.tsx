import { useContext } from 'react';
import { contextSideBar } from './ProviderSideBarController';

import "./btn-toggle-sidebar.scss"

export const BtnToggleSidebar = () => {
    const {toggleSidebar} = useContext(contextSideBar)

    return (
        <button onClick={toggleSidebar} className="btn-toggle-sidebar"><i className="fa-solid fa-bars"></i></button>
    )
}