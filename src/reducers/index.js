import { combineReducers } from 'redux'
import ticketsReducer from './ticketsReducer'
import stopsFilterReducer from './stopsFilterReducer'

const rootReducer = combineReducers({
    tickets: ticketsReducer,
    stopsFilter: stopsFilterReducer
})

export default rootReducer
