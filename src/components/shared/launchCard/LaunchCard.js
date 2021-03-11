import React from 'react';
import { MDBBadge, MDBCard, MDBCardBody, MDBIcon, MDBTypography } from 'mdbreact'

import { launchStatusIndicator, getFormattedDateTime } from '../../../utils/utility';

import { Link } from 'react-router-dom';
import CountDown from '../countdown/CountDown';
import styles from './launchCard.module.css';

const LaunchCard = ({ imgURL, id, net, name, launchLocation, launchStatus, agency, additionalqueryParams = null, footer = null }) => {

    const addiQueryParams = additionalqueryParams ? additionalqueryParams : '';

    return (
        <>
            <MDBCard style={{
                backgroundImage:
                    `url(${imgURL})`, backgroundSize: '100% 20rem,cover'
            }}>
                <MDBCardBody className={`text-center rgba-black-light ${styles.launchCard_body}`}>
                    {launchStatus === 'Success' || launchStatus === 'Failure' || launchStatus === 'Partial Failure' ? null : <MDBTypography tag='h2' variant="h2-responsive">
                        <CountDown launchDateTime={net} />
                    </MDBTypography>}
                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-3 text-truncate'> {name}</MDBTypography>
                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-3'> <MDBBadge color={launchStatusIndicator(launchStatus)}>{launchStatus}</MDBBadge></MDBTypography>
                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-3'><MDBIcon far icon="clock" /> {getFormattedDateTime(net)}</MDBTypography>
                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-3 text-truncate'>Agency: {agency}</MDBTypography>
                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-3 text-truncate'> <MDBIcon icon="map-marker-alt" />&nbsp; {launchLocation}</MDBTypography>
                    <Link to={`/launchDetails/${id}/${addiQueryParams}`} className="btn  btn-sm btn-primary mt-2">For more</Link>
                </MDBCardBody>
                {footer ?
                    footer
                    : null
                }
            </MDBCard>
        </>
    )
}

export default LaunchCard
