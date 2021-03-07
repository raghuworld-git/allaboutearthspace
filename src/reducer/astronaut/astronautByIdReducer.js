import { ASTRONAUT_BY_ID } from '../../actions/types'

const astronautByIdReducer = (state = null, action) => {
    switch (action.type) {
        case ASTRONAUT_BY_ID:
            return action.payload;
        default:
            return state;
    }
};

export default astronautByIdReducer;