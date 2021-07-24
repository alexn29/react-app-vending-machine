import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, Zoom } from 'react-toastify';

import Home from './application/components/pages/Home';
import Orders from './application/components/pages/Orders';

import NavBar from './application/components/layout/NavBar';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <ToastContainer
                position="top-center"
                transition={Zoom}
            />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/orders" component={Orders} />
            </Switch>
        </BrowserRouter>
    )
}

export default App