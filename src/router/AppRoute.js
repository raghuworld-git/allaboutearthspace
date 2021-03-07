import { MDBContainer } from 'mdbreact';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../components/dashboard/Dashboard';
import Launches from '../components/launchs/Launchs';

const AppRoute = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                {children}
                <MDBContainer>
                    <Switch>
                        <Route path='/launches/:type(upcoming|previous)' component={Launches} />
                        <Route path='/' exact component={Dashboard} />
                        <Route>
                            Oops
                    </Route>
                    </Switch>
                </MDBContainer>
            </BrowserRouter>
        </>
    )
}

export default AppRoute
