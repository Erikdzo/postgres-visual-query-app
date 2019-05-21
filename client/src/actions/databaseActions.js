import {CONNECT_ERROR, UPDATE_HOST} from "./hostActions";
import axios from "axios";
import axiosClient from '../utils/axiosClient';
export const ADD_TABLES = 'ADD_TABLES';
export const ADD_COLUMNS = 'ADD_COLUMNS';
export const ADD_CONSTRAINTS = 'ADD_CONSTRAINTS';
export const CONNECTED = 'CONNECTED';
export const CHANGE_SELECTED_SCHEMA = 'CHANGE_SELECTED_SCHEMA';
export const UPDATE_SEARCH_EXPR = 'UPDATE_SEARCH_EXPR';
export const DELETE_DATABASE = 'DELETE_DATABASE';

export function connectToDatabase(state) {
    return function (dispatch) {

        const hostInfo = {
            host: state.host,
            port: state.port,
            database: state.database,
            user: state.user,
            password: state.password
        };
        axios.all([
            axiosClient.post(`/database/tables`, hostInfo),
            axiosClient.post(`/database/columns`, hostInfo),
            axiosClient.post(`/database/constraints`, hostInfo)])
            .then(axios.spread((tables, columns, constraints) => {
                dispatch({type: ADD_TABLES, payload: tables.data.rows});
                dispatch({type: ADD_COLUMNS, payload: columns.data.rows});
                dispatch({type: ADD_CONSTRAINTS, payload: constraints.data.rows});
                dispatch({type: CONNECTED});

                dispatch({type: UPDATE_HOST, payload: hostInfo})
            })).catch(function (error) {
                dispatch({type: CONNECT_ERROR, payload: error.toString()});
        });
    }
}

export function changeSelectedSchema(schema) {
    return function (dispatch) {

        dispatch({type: CHANGE_SELECTED_SCHEMA, payload: schema})
    }
}

export function search(expr) {
    return function (dispatch) {

        dispatch({type: UPDATE_SEARCH_EXPR, payload: expr})
    }
}