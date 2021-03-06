import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdbreact'
import LaunchCard from '../../shared/launchCard/LaunchCard';

const Latest = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol lg='6' md='6' sm='12' className='mb-3'>
                    <section>
                        <MDBTypography tag='h4' variant="h4-responsive"><strong>Next Launch</strong></MDBTypography>
                        <LaunchCard />
                    </section>
                </MDBCol>
                <MDBCol lg='6' md='6' sm='12'>
                    <section>
                        <MDBTypography tag='h4' variant="h4-responsive"><strong>Next Launch</strong></MDBTypography>
                        <LaunchCard />
                    </section>
                </MDBCol>
            </MDBRow>
        </MDBContainer >
    )
}

export default Latest
