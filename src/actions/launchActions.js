import { launchAPI } from '../api/launchAPI';
import { NEXTLAUNCH, UPCOMINGLAUNCHS } from './types';

const upcoming = '/upcoming'

export const getNextLaunch = () => {
    return async (dispatch) => {
        const res = await launchAPI.get(`${upcoming}/?limit=1`);
        dispatch({
            type: NEXTLAUNCH,
            payload:
                res.data.results[0]

        });
    };
};

export const getUpcomingLaunches = (limit = 8, offset = 0) => {
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

