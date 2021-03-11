import { MDBBadge, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBRow, MDBTypography } from 'mdbreact';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';


import Loader from '../shared/Loader'
import CountDown from '../shared/countdown/CountDown';
import { getLaunchDetails } from '../../actions/launchActions'

import { getFormattedDateTime, launchStatusIndicator } from '../../utils/utility';

const LaunchDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: launchDetails } = useSelector(state => state.launchDetails, shallowEqual);

    useEffect(() => {
        dispatch(getLaunchDetails(id));
        return () => dispatch(getLaunchDetails(null, true));
    }, [id, dispatch])


    if (!launchDetails) {
        return (
            <Loader />
        )
    }

    const { name, image, net, status, pad, mission, rocket, launch_service_provider } = launchDetails;
    const { abbrev: launchStatus } = status;
    const { name: launchLocation } = pad.location;
    const missionDescription = mission?.description;
    const { name: agencyName } = launch_service_provider;
    const { full_name: launcherName, description: launcherInfo, id: launcherId } = rocket.configuration;
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

                    <MDBCard color='elegant-color' className='white-text'>
                        <MDBRow className='no-gutters'>
                            <MDBCol md='12' lg='5' sm='12'>
                                <img src={image} width='100%' height='400rem' alt={name} />
                            </MDBCol>
                            <MDBCol md='12' lg='7' sm='12'>
                                <MDBCardBody className='text-center d-flex flex-column justify-content-center'>
                                    <MDBTypography tag='h1' variant="h1-responsive" className='mt-sm-1 mt-lg-5'> <CountDown launchDateTime={net} /></MDBTypography>
                                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-2'><MDBIcon far icon="clock" /> {getFormattedDateTime(net)}</MDBTypography>
                                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-2'> <MDBBadge color={launchStatusIndicator(launchStatus)}>{launchStatus}</MDBBadge></MDBTypography>
                                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-2'> <MDBIcon icon="map-marker-alt" />&nbsp; {launchLocation}</MDBTypography>
                                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-2'> Agency:&nbsp; {agencyName}</MDBTypography>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>

                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-2'>
                <MDBCol size='12'>
                    <MDBCard color='elegant-color' className='white-text'>
                        <MDBCardBody>
                            <MDBTypography tag='h4' variant="h4-responsive" className='text-center mb-3'>Mission Info</MDBTypography>
                            <p className='text-center font-weight-normal'>{missionDescription || 'Mission description not available'}</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            {/* <MDBRow>
                <MDBCol lg='6' md='6' sm='12' className='mb-3'>
                    <Link to={`/agency/${agencyId}`}>
                        <AgencyCard imgURL={agencyLogoURL} agencyName={`${agencyName} (${agencyAbbr})`} countryMap={countryMap} />
                    </Link>
                </MDBCol>
                <MDBCol lg='6' md='6' sm='12' className='mb-3'>

                </MDBCol>
            </MDBRow> */}
            <MDBRow className='mb-2'>
                <MDBCol size='12'>
                    <MDBCard color='elegant-color' className='white-text'>
                        <MDBCardBody>
                            <MDBTypography tag='h4' variant="h4-responsive" className='text-center mb-3'>More about "{launcherName}" launch vehicle {' '}
                                <a href='https://en.wikipedia.org/wiki/Launch_vehicle' target='_blank' rel='noreferrer'>
                                    <MDBBadge pill color="grey" title='Learn more about launch vehicles'>
                                        <MDBIcon icon="info-circle" />
                                    </MDBBadge>
                                </a>
                            </MDBTypography>
                            <p className='text-center font-weight-normal'>{launcherInfo || 'Mission description not available'}</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

        </>
    )
}

export default LaunchDetails
