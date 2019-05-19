import {UPDATE_HOST, DELETE_HOST, CONNECT_ERROR} from '../actions/hostActions'

export const INITIAL_STATE = {
    host: '',
    port: 8080,
    database: '',
    user: '',
    password: '',
    error: ''
};

export default function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case UPDATE_HOST: {
            return {
                ...state,
                host: action.payload.host,
                port: action.payload.port,
                database: action.payload.database,
                user: action.payload.user,
                password: action.payload.password
            }

        }
        case DELETE_HOST: {
            return {
                ...INITIAL_STATE
            }
        }
        case CONNECT_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}