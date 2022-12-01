import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
    const initialState = { alert: null };

    const [state, dispatch] = useReducer(AlertReducer, initialState, (a) => a);

    // Set Alert
    const setAlert = (msg, type) => {
        dispatch({ type: SET_ALERT, payload: { msg, type } });
        setTimeout(() => clearAlert(), 3000);
    };

    const clearAlert = () => dispatch({ type: REMOVE_ALERT });

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert,
                clearAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;
