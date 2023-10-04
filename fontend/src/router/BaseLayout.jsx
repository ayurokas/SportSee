import React from 'react';
import Nav from '../components/nav/Nav';
import SideMenu from '../components/sidemenu/SideMenu';
import {Outlet} from "react-router-dom";

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