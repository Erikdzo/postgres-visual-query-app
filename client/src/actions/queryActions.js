import axiosClient from '../utils/axiosClient';

export const ADD_COLUMN = 'ADD_COLUMN';
export const GENERATE_SQL = 'GENERATE_SQL';
export const SWITCH_DISTINCT = 'SWITCH_DISTINCT';
export const ADD_TABLE = 'ADD_TABLE';
export const REMOVE_TABLE = 'REMOVE_TABLE';
export const UPDATE_COLUMN = 'UPDATE_COLUMN';
export const UPDATE_COLUMNS_ORDER = 'UPDATE_COLUMNS_ORDER';
export const UPDATE_TABLE = 'UPDATE_TABLE';
export const UPDATE_JOINS_ORDER = 'UPDATE_JOINS_ORDER';
export const ADD_RESULT = 'ADD_RESULT';
export const QUERY_ERROR = 'QUERY_ERROR';
export const ADD_JOIN = 'ADD_JOIN';
export const UPDATE_JOIN = 'UPDATE_JOIN';
export const REMOVE_JOIN = 'REMOVE_JOIN';
export const REMOVE_COLUMN = 'REMOVE_COLUMN';
export const DELETE_QUERY = 'DELETE_QUERY';

export function addColumn(data) {
    return function (dispatch) {

        dispatch({type: ADD_COLUMN, payload: data});
        dispatch({type: GENERATE_SQL})
    }
}

export function switchDistinct() {
    return function (dispatch) {

        dispatch({type: SWITCH_DISTINCT});
        dispatch({type: GENERATE_SQL})
    }
}

export function addTable(data) {
    return function (dispatch) {

        dispatch({type: ADD_TABLE, payload: data});
        dispatch({type: GENERATE_SQL})
    }
}

export function removeTable(data) {
    return function (dispatch) {

        dispatch({type: REMOVE_TABLE, payload: data});
        dispatch({type: GENERATE_SQL})
    }
}

export function updateColumn(data) {
    return function (dispatch) {

        dispatch({type: UPDATE_COLUMN, payload: data});
        dispatch({type: GENERATE_SQL})
    }
}

export function updateColumnsOrder(data) {
    return function (dispatch) {

        dispatch({type: UPDATE_COLUMNS_ORDER, payload: data});
        dispatch({type: GENERATE_SQL});
    }
}

export function updateTable(data) {
    return function (dispatch) {

        dispatch({type: UPDATE_TABLE, payload: data});
        dispatch({type: GENERATE_SQL})
    }
}

export function updateJoinsOrder(data) {
    return function (dispatch) {

        dispatch({type: UPDATE_JOINS_ORDER, payload: data});
        dispatch({type: GENERATE_SQL})
    }
}

export const query = (state) => ({

    type: ADD_RESULT,
    payload: axiosClient.post(`/postgres-query/api/query/query`, {
        host: state.host,
        port: state.port,
        database: state.database,
        user: state.user,
        password: state.password,
        sql: state.sql
    })
});

export function addJoin() {
    return function (dispatch) {

        dispatch({type: ADD_JOIN})
    }
}

export function updateJoin(data) {
    return function (dispatch) {


        dispatch({type: UPDATE_JOIN, payload: data});

        dispatch({type: GENERATE_SQL})
    }
}

export function removeJoin(data) {
    return function (dispatch) {


        dispatch({type: REMOVE_JOIN, payload: data});

        dispatch({type: GENERATE_SQL})
    }
}


export function removeColumn(data) {
    return function (dispatch) {

        dispatch({type: REMOVE_COLUMN, payload: data});
        dispatch({type: GENERATE_SQL})
    }
}

export function deleteQuery() {
    return function (dispatch) {

        dispatch({type: DELETE_QUERY})
    }
}