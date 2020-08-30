export const initialState = {
    loading: true,
    conferences: [],
    errorMessage: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_CONFERENCES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_CONFERENCES_SUCCESS":
            console.log('action.payload', action.payload);
            return {
                ...state,
                loading: false,
                conferences: action.payload
            };
        case "SEARCH_CONFERENCES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: null
            };
        default:
            return state;
    }
};