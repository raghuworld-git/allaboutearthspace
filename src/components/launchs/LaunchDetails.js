import { MDBBadge, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdbreact';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import Loader from '../shared/Loader'
import CountDown from '../shared/countdown/CountDown';
import { getLaunchDetails } from '../../actions/launchActions'

import { getFormattedDateTime, launchStatusIndicator } from '../../utils/utility';

const LaunchDetails = () => {

    const { id, name } = useParams();
    const dispatch = useDispatch();
    const launchDetails = useSelector(state => state.launchDetails.data, shallowEqual);

    useEffect(() => {
        dispatch(getLaunchDetails(id));

        return () => dispatch(getLaunchDetails(null, true));
    }, [id, dispatch])


    if (!launchDetails) {
        return (
            <Loader />
        )
    }
    console.log(launchDetails);
    const { name: apiName, image, net, status, pad, mission } = launchDetails;
    const { abbrev: launchStatus } = status;
    const { name: launchLocation } = pad.location;
    const missionDescription = mission?.description;


    return (
        <>
            <Helmet>
                <title>{name}</title>
            </Helmet>
            <MDBRow>
                <MDBCol md='12' sm='12' lg='12' className='text-center'>
                    <MDBTypography tag='h3' variant="h3-responsive" className='text-capitalize'>{apiName}</MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className='mt-3 mb-2'>
                <MDBCol lg='12' sm='12' md='12'>

                    <MDBCard color='black' className='white-text'>
                        <MDBRow className='no-gutters'>
                            <MDBCol md='12' lg='5' sm='12'>
                                <img src={image} width='100%' height='400rem' alt={apiName} />
                            </MDBCol>
                            <MDBCol md='12' lg='7' sm='12'>
                                <MDBCardBody className='text-center'>
                                    <MDBTypography tag='h1' variant="h1-responsive" className='mt-sm-1 mt-lg-5'> <CountDown launchDateTime={net} /></MDBTypography>
                                    <MDBTypography tag='h4' variant="h4-responsive" className='mt-3'><MDBIcon far icon="clock" /> {getFormattedDateTime(net)}</MDBTypography>
                                    <MDBTypography tag='h4' variant="h4-responsive" className='mt-3'> <MDBBadge color={launchStatusIndicator(launchStatus)}>{launchStatus}</MDBBadge></MDBTypography>
                                    <MDBTypography tag='h4' variant="h4-responsive" className='mt-3'> <MDBIcon icon="map-marker-alt" />&nbsp; {launchLocation}</MDBTypography>

                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-2'>
                <MDBCol size='12'>
                    <MDBCard color='black' className='white-text'>
                        <MDBCardBody>
                            <MDBTypography tag='h4' variant="h4-responsive" className='text-center mb-3'>Mission Info</MDBTypography>
                            <p className='text-center font-weight-normal'>{missionDescription || 'Mission description not available'}</p>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>
        </>
    )
}

export default LaunchDetails
