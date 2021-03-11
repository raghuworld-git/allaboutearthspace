import React from 'react'
import { MDBCard, MDBCardBody, MDBTypography } from 'mdbreact';


import styles from './agencyCard.module.css';

const AgencyCard = ({ imgURL, agencyName, countryMap }) => {
    return (

        <MDBCard style={{
            backgroundImage:
                `url(${imgURL})`, backgroundSize: '100% 15rem,cover'
        }}>
            <MDBCardBody className={`text-center d-flex flex-column justify-content-center rgba-black-strong ${styles.agencycard_body}`}>
                <MDBTypography tag='h5' variant="h5-responsive">
                    Launch service provider
                </MDBTypography>
                <MDBTypography tag='h2' variant="h2-responsive">
                    <strong>  {agencyName}</strong>
                </MDBTypography>
                {/* <img src={countryMap} style={{ height: '5rem', width: '5rem' }} alt={agencyName} /> */}
            </MDBCardBody>
        </MDBCard>

    )
}

export default AgencyCard
