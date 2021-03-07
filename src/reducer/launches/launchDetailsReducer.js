import { LAUNCH_BY_ID } from '../../actions/types';

const launchDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case LAUNCH_BY_ID:
            return action.payload;
        default:
            return state;
    }
};

export default launchDetailsReducer;