import { MDBCol, MDBRow, MDBTypography } from 'mdbreact';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';

import Loader from '../shared/Loader'
import { getLaunchDetails } from '../../actions/launchActions'

import styles from './launch.module.css';

const LaunchDetails = ({ getLaunchDetails, launchDetails }) => {

    const { id, name } = useParams();

    useEffect(() => {
        getLaunchDetails(id);
    }, [])

    console.log(launchDetails)
    if (Object.keys(launchDetails).length === 0) {
        return (
            <Loader />
        )
    }

    const { name: apiName, image } = launchDetails;
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
            <MDBRow>
                <MDBCol lg='12' sm='12' md='12'>
                    <img src={image} className={`${styles.launchDetailsImage} rounded`} alt="" />
                </MDBCol>
            </MDBRow>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        launchDetails: state.launchDetails
    }
}
export default connect(mapStateToProps, { getLaunchDetails })(LaunchDetails)
