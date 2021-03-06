import React from 'react';
import { MDBContainer } from 'mdbreact';

import Dashboard from '../components/dashboard/Dashboard';

const Home = () => {
    return (
        <div>
            <MDBContainer fluid>
                <Dashboard />
            </MDBContainer>
        </div>
    )
}

export default Home
