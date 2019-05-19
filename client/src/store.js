import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [promise, thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default createStore(reducer, middleware);