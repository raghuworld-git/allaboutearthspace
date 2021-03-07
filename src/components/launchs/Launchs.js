import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getUpcomingLaunches } from '../../actions/launchActions';
import { MDBCol, MDBRow, MDBTypography } from 'mdbreact';
import LaunchCard from '../shared/launchCard/LaunchCard';
import { Helmet } from 'react-helmet';
import Pagination from '../shared/Pagination';


const Launchs = ({ upcomingLaunches, getUpcomingLaunches }) => {

    const pageLimit = 8;

    useEffect(() => {

        getUpcomingLaunches();

    }, [])

    if (!upcomingLaunches.data) {
        return null;
    }
    const { data, count } = upcomingLaunches;


    const pageClickHander = (selectedPage) => {
        let offset = Math.ceil(selectedPage * pageLimit);
        getUpcomingLaunches(pageLimit, offset);
        window.scrollTo(0, 0);
    }

    const renderLaunches = () => {
        return (
            data.map((item) => {
                const { image: imgURL, id, net, status, name, pad } = item;
                const { abbrev: launchStatus } = status;
                const { name: launchLocation } = pad.location;
                return (
                    <MDBCol key={id} lg='6' md='6' sm='12' className='mb-3'>
                        <LaunchCard imgURL={imgURL} id={id} net={net} name={name} launchLocation={launchLocation} launchStatus={launchStatus} />
                    </MDBCol>
                )
            })
        )
    }

    return (
        <>
            <Helmet>
                <title>Launches</title>
            </Helmet>
            <MDBRow>
                <MDBCol md='12' sm='12' lg='12' className='text-center'>
                    <MDBTypography tag='h3' variant="h3-responsive" className='text-capitalize'>Upcoming Launches</MDBTypography>
                </MDBCol>
            </MDBRow>
            {/* <MDBRow>
                <LaunchFilters />
            </MDBRow> */}
            <MDBRow>
                {renderLaunches()}
            </MDBRow>
            <MDBRow>
                <MDBCol md='12' sm='12' lg='12' className='text-center'>
                    <Pagination totalCount={count} pageLimit={pageLimit} pageClickHander={pageClickHander} />
                </MDBCol>
            </MDBRow>
        </>
    )
}

const mapStateToMaps = (state) => {
    return {
        upcomingLaunches: state.upcomingLaunches
    }
}

export default connect(mapStateToMaps, { getUpcomingLaunches })(Launchs)
