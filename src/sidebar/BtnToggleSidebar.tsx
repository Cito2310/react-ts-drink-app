import { useContext } from 'react';
import { contextSideBar } from './ProviderSideBarController';


export const BtnToggleSidebar = () => {
    const {toggleSidebar} = useContext(contextSideBar)

    return (
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
    )
}