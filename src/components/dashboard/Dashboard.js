import React, { useEffect } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdbreact'
import LaunchCard from '../shared/launchCard/LaunchCard';

import { getNextLaunch } from '../../actions/launchActions';
import { useDispatch, useSelector } from 'react-redux';

import { Helmet } from 'react-helmet';
import Loader from '../shared/Loader';

const Dashboard = () => {

    const dispatch = useDispatch();
    const nextLaunch = useSelector(state => state.nextLaunch.data);
    useEffect(() => {
        dispatch(getNextLaunch());

        return () => dispatch(getNextLaunch(true));
    }, [dispatch])

    if (!nextLaunch) {
        return (
            <Loader />
        )
    }

    const { image: imgURL, id, net, status, name, pad } = nextLaunch;
    const { abbrev: launchStatus } = status;
    const { name: launchLocation } = pad.location;

    return (
        <>
            <Helmet>
                <title>AAES | Home</title>
            </Helmet>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg='6' md='12' sm='12' className='mb-3'>
                        <section>
                            <MDBTypography tag='h4' variant="h4-responsive"><strong>Next Launch</strong></MDBTypography>
                            <LaunchCard imgURL={imgURL} id={id} net={net} name={name} launchLocation={launchLocation} launchStatus={launchStatus} />
                        </section>
                    </MDBCol>
                    <MDBCol lg='6' md='12' sm='12' className='mb-3'>
                        <section>
                            <MDBTypography tag='h4' variant="h4-responsive"><strong>Next Launch</strong></MDBTypography>
                            <LaunchCard imgURL='https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80' />
                        </section>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </>
    )
}

export default Dashboard
