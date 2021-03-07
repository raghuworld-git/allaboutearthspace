import { AGENCIES } from '../../actions/types';

const agenciesReducer = (state = [], action) => {
    switch (action.type) {
        case AGENCIES:
            return action.payload;
        default:
            return state;
    }
};

export default agenciesReducer;