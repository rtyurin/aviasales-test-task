import { combineReducers } from 'redux'
import ticketsReducer from './ticketsReducer'
import stopsFilterReducer from './stopsFilterReducer'
import currencyFilterReducer from './currencyFilterReducer'
import currencyRatesReducer from './currencyRatesReducer'

const rootReducer = combineReducers({
    tickets: ticketsReducer,
    stopsFilter: stopsFilterReducer,
    currencyFilter: currencyFilterReducer,
    currencyRates: currencyRatesReducer
})

export default rootReducer
