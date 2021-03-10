import { MDBBadge, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdbreact';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import Loader from '../shared/Loader'
import CountDown from '../shared/countdown/CountDown';
import { getLaunchDetails } from '../../actions/launchActions'

import { getFormattedDateTime, launchStatusIndicator } from '../../utils/utility';
import AgencyCard from '../shared/agencyCard/AgencyCard';

const LaunchDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: launchDetails, countryMap } = useSelector(state => state.launchDetails, shallowEqual);

    useEffect(() => {
        dispatch(getLaunchDetails(id));
        return () => dispatch(getLaunchDetails(null, true));
    }, [id, dispatch])


    if (!launchDetails) {
        return (
            <Loader />
        )
    }

    const { name, image, net, status, pad, mission, launch_service_provider } = launchDetails;
    const { abbrev: launchStatus } = status;
    const { name: launchLocation } = pad.location;
    const missionDescription = mission?.description;
    const { logo_url: agencyLogoURL, name: agencyName, abbrev: agencyAbbr } = launch_service_provider;
    console.log(launchDetails);

    return (
        <>
            <Helmet>
                <title>{name}</title>
            </Helmet>
            <MDBRow>
                <MDBCol md='12' sm='12' lg='12' className='text-center'>
                    <MDBTypography tag='h3' variant="h3-responsive" className='text-capitalize'>{name}</MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className='mt-3 mb-2'>
                <MDBCol lg='12' sm='12' md='12'>

                    <MDBCard color='black' className='white-text'>
                        <MDBRow className='no-gutters'>
                            <MDBCol md='12' lg='5' sm='12'>
                                <img src={image} width='100%' height='400rem' alt={name} />
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
            <MDBRow>
                <MDBCol lg='6' md='6' sm='12' className='mb-3'>
                    <AgencyCard imgURL={agencyLogoURL} agencyName={`${agencyName} (${agencyAbbr})`} countryMap={countryMap} />
                </MDBCol>
                <MDBCol lg='6' md='6' sm='12' className='mb-3'>

                </MDBCol>
            </MDBRow>
        </>
    )
}

export default LaunchDetails
