import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { connect } from 'react-redux';
import { getUpcomingLaunches } from '../../actions/launchActions';
import { MDBBtn, MDBCol, MDBRow, MDBTypography } from 'mdbreact';
import LaunchCard from '../shared/launchCard/LaunchCard';
import { Helmet } from 'react-helmet';


const Launchs = ({ upcomingLaunches, getUpcomingLaunches }) => {

    const { type } = useParams();

    useEffect(() => {
        if (type === 'upcoming') {
            getUpcomingLaunches();
        }
    }, [])

    if (!upcomingLaunches.data) {
        return null;
    }
    const { data } = upcomingLaunches;

    const renderLaunches = () => {
        return (
            data.map((item) => {
                const { image: imgURL, id, net, status, name, pad } = item;
                const { abbrev: launchStatus } = status;
                const { name: launchLocation } = pad.location;
                return (
                    <MDBCol key={id} lg='6' md='6' sm='12' className='mb-3'>
                        <LaunchCard imgURL={imgURL} id={id} net={net} name={name} launchLocation={launchLocation} launchStatus={launchStatus} />
                    </MDBCol>
                )
            })
        )
    }

    return (
        <>
            <Helmet>
                <title>{type} Launches</title>
            </Helmet>
            <MDBRow>
                <MDBCol md='4' sm='4' lg='4'>
                    <MDBBtn className='float-left'>Back </MDBBtn>
                </MDBCol>
                <MDBCol md='4' sm='4' lg='4' className='text-center'>
                    <MDBTypography tag='h4' variant="h4-responsive" className='text-capitalize'>{type} Launches</MDBTypography>
                </MDBCol>
                <MDBCol md='4' sm='4' lg='4'>

                </MDBCol>
            </MDBRow>
            <MDBRow>
                {renderLaunches()}
            </MDBRow>
        </>
    )
}

const mapStateToMaps = (state) => {
    return {
        upcomingLaunches: state.upcomingLaunches
    }
}

export default connect(mapStateToMaps, { getUpcomingLaunches })(Launchs)
