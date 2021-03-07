import { MDBCol, MDBRow } from 'mdbreact'
import React from 'react'

const Loader = () => {
    return (
        <MDBRow>
            <MDBCol md='12' sm='12' lg='12' className='text-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </MDBCol>
        </MDBRow>
    )
}

export default Loader
