import { MDBContainer } from 'mdbreact';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../components/dashboard/Dashboard';
import Launches from '../components/launchs/Launchs';
import LaunchDetails from '../components/launchs/LaunchDetails';

const AppRoute = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                {children}
                <MDBContainer>
                    <Switch>
                        <Route path='/launches' exact component={Launches} />
                        <Route path='/launchDetails/:id/:name?' component={LaunchDetails} />
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
