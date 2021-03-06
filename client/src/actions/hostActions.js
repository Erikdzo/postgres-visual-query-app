import {DELETE_DATABASE} from "./databaseActions";

export const DELETE_QUERY = 'DELETE_QUERY';
export const DELETE_HOST = 'DELETE_HOST';
export const UPDATE_HOST = 'UPDATE_HOST';
export const CONNECT_ERROR = 'CONNECT_ERROR';
export const CONNECTED = 'CONNECTED';
export const CONNECTING = 'CONNECTING';

export function disconnect() {
    return function (dispatch) {
        dispatch({type: DELETE_QUERY});
        dispatch({type: DELETE_DATABASE});
        dispatch({type: DELETE_HOST});
    }
}

