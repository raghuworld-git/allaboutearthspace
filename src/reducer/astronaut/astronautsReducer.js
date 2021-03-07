import { ASTRONAUT } from '../../actions/types';

const astronautsReducer = (state = [], action) => {
    switch (action.type) {
        case ASTRONAUT:
            return action.payload;
        default:
            return state;
    }
};

export default astronautsReducer;