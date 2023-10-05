import React from 'react';
import Nav from '../components/nav/Nav';
import SideMenu from '../components/sidemenu/SideMenu';
import {Outlet} from "react-router-dom";

/**
 * Composant BaseLayout.
 * Ce composant est utilisé comme mise en page principale pour les pages qui nécessitent la navigation et le menu latéral.
 * 
 * @component
 */

function BaseLayout() {

    return (
        <>
            <Nav />
            <main>
                <SideMenu />
                < Outlet />
            </main>
        </>
    );
}


export default BaseLayout;