import React, { useReducer } from 'react';
import CoordinateContext from "./coordinateContext";
import coordinateReducer from "./coordinateReducer";
import {CLEAR_POINT_PAIR, SET_LOADING, SET_NOT_LOADING, SET_POINT_PAIR} from "../types";
import PointPairBuilder from "../../models/pointPairBuilder";

const CoordinateState = (props) => {
    const initialState = {
        pointPairs: [],
        loading: false
    };

    const [state, dispatch] = useReducer(coordinateReducer, initialState, (c) => c);

    const builder = new PointPairBuilder();

    const buildPointPairs = (inputString) => {
        setLoading();
        try {
            const pairs = builder.build(inputString);
            dispatch({ type: SET_POINT_PAIR, payload: pairs });
        } finally {
            setNotLoading();
        }
    };

    const clearPointPairs = () => dispatch({ type: CLEAR_POINT_PAIR });
    const setLoading = () => dispatch({ type: SET_LOADING });
    const setNotLoading = () => dispatch({ type: SET_NOT_LOADING });

    return (
        <CoordinateContext.Provider value={{
                pointPairs: state.pointPairs,
                loading: state.loading,
                buildPointPairs,
                clearPointPairs
            }}>
            {props.children}
        </CoordinateContext.Provider>
    );
};

export default CoordinateState;