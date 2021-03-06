import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

const AppRoute = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                {children}
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRoute
