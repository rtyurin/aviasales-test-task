import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const initialState = {
    tickets: {},
    stopsFilter: {
        0: true,
        1: true,
        2: true,
        3: true
    },
    currencyFilter: 'RUB',
    currencyRates: {}
}

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, initialState, reduxDevTools(applyMiddleware(...middlewares)))

export default store
