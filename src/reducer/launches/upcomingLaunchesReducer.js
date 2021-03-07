import { UPCOMINGLAUNCHS } from '../../actions/types';

const upcomingLaunchesReducer = (state = {}, action) => {
    switch (action.type) {
        case UPCOMINGLAUNCHS:
            return action.payload;
        default:
            return { ...state };
    }
};

export default upcomingLaunchesReducer;