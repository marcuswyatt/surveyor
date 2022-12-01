import {CLEAR_POINT_PAIR, SET_LOADING, SET_NOT_LOADING, SET_POINT_PAIR} from "../types";

const coordinateReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_NOT_LOADING:
            return {
                ...state,
                loading: false
            };
        case SET_POINT_PAIR:
            return {
                ...state,
                pointPairs: action.payload,
                loading: false
            };
        case CLEAR_POINT_PAIR:
            return {
                ...state,
                pointPairs: [],
                loading: false
            };
        default:
            return state;
    }
};

export default coordinateReducer;