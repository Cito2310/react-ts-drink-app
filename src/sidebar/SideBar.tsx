import { useContext } from 'react';

import { contextSideBar } from './ProviderSideBarController';

import "./btn-sidebar.scss"

export const SideBar = () => {
    const { sidebarOpen, toggleSidebar } = useContext(contextSideBar)

    return (
        <div className={sidebarOpen ? "sidebar open left" : "sidebar left"}> {/* PARA CAMBIAR EL LADO DONDE SE DESPLEGARA LA BARRA LATERAL CAMBIAR right | left */}
            {/* MODIFICAR DESDE AQUI */}
            <div className='sidebar-section-top'>
                <h2>Titulo</h2>
                <i onClick={toggleSidebar} className="fa-solid fa-xmark"></i> {/* ESTE ELEMENTO ES REQUERIDO - NO BORRAR */}
            </div>

            <div className='sidebar-section-container'>
                <h3>Texto Uno</h3>
                <h3>Texto Dos</h3>
                <h3>Texto Tres</h3>
            </div>
            {/* MODIFICAR HASTA AQUI */}
        </div>
    )
}
