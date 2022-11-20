import { useContext } from 'react';

import { contextSideBar } from './ProviderSideBarController';

import "./btn-sidebar.scss"
import "./black-screen.scss"

export const SideBar = () => {
    const { sidebarOpen, toggleSidebar } = useContext(contextSideBar)

    return (
        <>
            <div className={sidebarOpen ? "sidebar open left" : "sidebar left"}> {/* PARA CAMBIAR EL LADO DONDE SE DESPLEGARA LA BARRA LATERAL CAMBIAR right | left */}
                {/* MODIFICAR DESDE AQUI */}
                <div className='sidebar-section-top'>
                    <h2>DRINK APP</h2>
                    <i onClick={toggleSidebar} className="fa-solid fa-xmark"></i> {/* ESTE ELEMENTO ES REQUERIDO - NO BORRAR */}
                </div>

                <div className='sidebar-section-container'>

                    <button className='last-button'>Añadir un nuevo producto</button>

                    <hr/>
                    <button>Todos los productos</button>
                    <button className='last-button'>Solo productos seleccionados</button>

                    <hr/>

                    <button>Mostrar cartas</button>
                    <button className='last-button'>Mostrar lista</button>

                </div>
                {/* MODIFICAR HASTA AQUI */}
            </div>

            {
                sidebarOpen ? <div id='black-screen' className='animate__animated animate__fadeIn' onClick={toggleSidebar}></div> : null
            }
        </>
    )
}
