import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

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

const middleware = applyMiddleware(thunk, logger)

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, initialState, reduxDevTools(middleware))

export default store
