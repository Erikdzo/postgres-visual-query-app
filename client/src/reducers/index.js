import { combineReducers } from 'redux';

import host from './hostReducer';
import database from './databaseReducer'
import query from './queryReducer'
import settings from './settingsReducer'

export default combineReducers({
    host,
    database,
    query,
    settings
})