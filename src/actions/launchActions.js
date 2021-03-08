import { launchAPI } from '../api/launchAPI';
import { NEXTLAUNCH, UPCOMINGLAUNCHS, LAUNCH_BY_ID } from './types';

const upcoming = '/upcoming'

export const getNextLaunch = (clear = false) => {
    if (!clear) {
        return async (dispatch) => {
            const res = await launchAPI.get(`${upcoming}/?limit=1`);
            dispatch({
                type: NEXTLAUNCH,
                payload: {
                    data: res.data.results[0]
                }
            });
        };
    }

    return (dispatch) => {
        dispatch({
            type: NEXTLAUNCH,
            payload: {
                data: null
            }
        });
    };

};

export const getUpcomingLaunches = (limit = 8, offset = 0, clear = false) => {
    if (!clear) {
        return async (dispatch) => {
            const res = await launchAPI.get(`${upcoming}/?limit=${limit}&offset=${offset}`);
            dispatch({
                type: UPCOMINGLAUNCHS,
                payload: {
                    data: res.data.results,
                    count: res.data.count
                }
            });
        };
    }
    else {
        return (dispatch) => {
            dispatch({
                type: UPCOMINGLAUNCHS,
                payload: {
                    data: null,
                    count: 0
                }
            });
        };
    }
};


export const getLaunchDetails = (id = null, clear = false) => {
    if (!clear) {
        return async (dispatch) => {
            const res = await launchAPI.get(`/${id}`);
            dispatch({
                type: LAUNCH_BY_ID,
                payload: { data: res.data }
            });
        };
    }
    return (dispatch) => {
        dispatch({
            type: LAUNCH_BY_ID,
            payload: { data: null }
        });
    };

};


// export const getAstronauts = (limit = 8, offset = 0) => {
//     return async (dispatch) => {
//         const res = await astronautAPI.get(`/?limit=${limit}&offset=${offset}&ordering=name`);
//         dispatch({
//             type: ASTRONAUT,
//             payload: {
//                 count: res.data.count, data: res.data.results, next: res.data.next, previous: res.data.previous
//             }
//         });
//     };
// };

