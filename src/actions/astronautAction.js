import { astronautAPI } from '../api/astronautAPI';
import { ASTRONAUT, ASTRONAUT_BY_ID } from './types';

export const getAstronauts = (limit = 8, offset = 0) => {
    return async (dispatch) => {
        const res = await astronautAPI.get(`/?limit=${limit}&offset=${offset}&ordering=name`);
        dispatch({
            type: ASTRONAUT,
            payload: {
                count: res.data.count, data: res.data.results, next: res.data.next, previous: res.data.previous
            }
        });
    };
};

export const getAstronautById = (id) => {
    return async (dispatch) => {
        const res = await astronautAPI.get(`/${id}/?mode=detailed`);
        dispatch({
            type: ASTRONAUT_BY_ID,
            payload: res.data
        });
    };
};
