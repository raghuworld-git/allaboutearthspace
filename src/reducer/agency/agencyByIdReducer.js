import { AGENCY_BY_ID } from '../../actions/types'

const agencyByIdReducer = (state = null, action) => {
    switch (action.type) {
        case AGENCY_BY_ID:
            return action.payload;
        default:
            return state;
    }
};

export default agencyByIdReducer;