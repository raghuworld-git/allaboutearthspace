import { MDBBadge, MDBCard, MDBCardBody, MDBIcon, MDBTypography } from 'mdbreact'
import React from 'react';
import CountDown from '../countdown/CountDown';

import styles from './launchCard.module.css';

const LaunchCard = () => {
    return (
        <>

            {/* <MDBCard style={{ width: "100%" }} className='d-flex flex-row'>
                <MDBRow middle className='no-gutters'>
                    <MDBCol lg='6' md='12' sm='12'>
                        <MDBCardImage className={styles.launchCard_img} src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" waves />
                    </MDBCol>
                    <MDBCol lg='6' md='12' sm='12'>
                        <MDBCardBody className={`text-center ${styles.launchCard_body}`}>
                            <CountDown />
                            <MDBTypography tag='h5' variant="h5-responsive"> Falcon 9 Block 5 | Starlink 20</MDBTypography>
                            <MDBTypography tag='h5' variant="h5-responsive"> <MDBBadge color="green">Success</MDBBadge></MDBTypography>
                            <MDBTypography tag='h5' variant="h5-responsive" className='mt-3'> <MDBIcon icon="map-marker-alt" />{' '} Cape Canaveral, FL, USA</MDBTypography>

                            <a href="/" className="btn btn-outline-dark">For more</a>

                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard> */}
            <MDBCard style={{
                backgroundImage:
                    "url(https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210218213404.png)", backgroundSize: 'cover'
            }}>
                <MDBCardBody className={`text-center mt-4 rgba-black-light ${styles.launchCard_body}`}>
                    <CountDown />
                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-3'> Falcon 9 Block 5 | Starlink 20</MDBTypography>
                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-3'> <MDBBadge color="green">Success</MDBBadge></MDBTypography>
                    <MDBTypography tag='h5' variant="h5-responsive" className='mt-3'> <MDBIcon icon="map-marker-alt" />&nbsp; Cape Canaveral, FL, USA</MDBTypography>
                    <a href="/" className="btn btn-primary mt-3">For more</a>
                </MDBCardBody>
            </MDBCard>
        </>
    )
}

export default LaunchCard
