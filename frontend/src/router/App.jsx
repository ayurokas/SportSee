import React from 'react';
import Dashboard from '../pages/dashboard/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './BaseLayout.jsx';
import Home from '../pages/home/Home.jsx';
import Error from '../pages/error/Error.jsx';

/**
 * Composant App.
 * C'est le composant racine de l'application. Il configure les routes principales et englobe toute l'application dans un routeur.
 * 
 * @component
 */

function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<BaseLayout />} >
                    <Route path="/dashboard/:id/" element={<Dashboard />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}


export default App;