import { combineReducers } from 'redux';

import astronautsReducer from './astronaut/astronautsReducer';
import astronautByIdReducer from './astronaut/astronautByIdReducer';

import agencysReducer from './agency/agencysReducer';
import agencyByIdReducer from './agency/agencyByIdReducer';

import nextLaunchReducer from './launches/nextLaunchReducer';
import upcomingLaunchesReducer from './launches/upcomingLaunchesReducer';
import launchDetailsReducer from './launches/launchDetailsReducer';

export default combineReducers({
    astronauts: astronautsReducer,
    astronautDetails: astronautByIdReducer,
    agencyDetails: agencyByIdReducer,
    agencies: agencysReducer,
    nextLaunch: nextLaunchReducer,
    upcomingLaunches: upcomingLaunchesReducer,
    launchDetails: launchDetailsReducer
});