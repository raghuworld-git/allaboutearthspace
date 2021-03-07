import { MDBCol } from 'mdbreact'
import React from 'react'

const LaunchFilters = () => {
    return (
        <>
            <MDBCol md='4' sm='12' lg='4' className='text-center my-3'>
                <div>
                    <label>Filter by: </label>
                    <select className="browser-default custom-select">
                        <option selected value="upcoming">Upcoming launches</option>
                        <option value="Previous">Previous Launches</option>
                    </select>
                </div>

            </MDBCol>
            <MDBCol md='4' sm='12' lg='4' className='text-center my-3'>
                <div>
                    <label>Filter by: </label>
                    <select className="browser-default custom-select">
                        <option selected value="upcoming">Upcoming launches</option>
                        <option value="Previous">Previous Launches</option>
                    </select>
                </div>

            </MDBCol>
            <MDBCol md='4' sm='12' lg='4' className='text-center my-3'>
                <div>
                    <label>Filter by: </label>
                    <select className="browser-default custom-select">
                        <option selected value="upcoming">Upcoming launches</option>
                        <option value="Previous">Previous Launches</option>
                    </select>
                </div>

            </MDBCol>
        </>
    )
}

export default LaunchFilters
