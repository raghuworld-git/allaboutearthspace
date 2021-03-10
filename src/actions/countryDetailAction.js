// import { countryDetailAPI } from '../api/countryDetailAPI';
// import { COUNTRYDETAIL } from './types';


// export const getCountry = (clear = false) => {
//     if (!clear) {
//         return async (dispatch) => {
//             const res = await launchAPI.get(`${upcoming}/?limit=1&mode=detailed`);
//             dispatch({
//                 type: NEXTLAUNCH,
//                 payload: {
//                     data: res.data.results[0]
//                 }
//             });
//         };
//     }

//     return (dispatch) => {
//         dispatch({
//             type: NEXTLAUNCH,
//             payload: {
//                 data: null
//             }
//         });
//     };

// };
