export const initialState = {
    loading: true,
    conferences: [],
    newconferences: [],
    errorMessage: null
};

// export const reducer = (state, action) => {
//     switch (action.type) {
//         case "SEARCH_CONFERENCES_REQUEST":
//             return {
//                 ...state,
//                 loading: true,
//                 errorMessage: null,
//                 conferences: action.payload
//             };
//         case "SEARCH_CONFERENCES_SUCCESS":
//             return {
//                 ...state,
//                 loading: false,
//                 conferences: action.payload
//             };
//         case "SEARCH_CONFERENCES_FAILURE":
//             return {
//                 ...state,
//                 loading: false,
//                 errorMessage: null
//             };
//         default:
//             return state;
//     }
// };