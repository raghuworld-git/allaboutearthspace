import { agencyAPI } from '../api/agencyAPI';
import { AGENCIES, AGENCY_BY_ID } from './types';

export const getAgencies = (limit = 6, offset = 0) => {
    return async (dispatch) => {
        const res = await agencyAPI.get(`/?mode=detailed&limit=${limit}&offset=${offset}&ordering=name`);
        dispatch({
            type: AGENCIES,
            payload: {
                count: res.data.count, data: res.data.results
            }
        });
    };
};

export const getAgencyById = (id) => {
    return async (dispatch) => {
        const res = await agencyAPI.get(`/ ${id}`);
        dispatch({
            type: AGENCY_BY_ID,
            payload: res.data
        });
    };
};