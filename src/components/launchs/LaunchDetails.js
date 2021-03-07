import { MDBCol, MDBRow, MDBTypography } from 'mdbreact';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'

const LaunchDetails = () => {

    const { id } = useParams();

    return (
        <>
            <Helmet>
                <title>Launche | {id}</title>
            </Helmet>
            <MDBRow>
                <MDBCol md='12' sm='12' lg='12' className='text-center'>
                    <MDBTypography tag='h3' variant="h3-responsive" className='text-capitalize'>{id}</MDBTypography>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default LaunchDetails
