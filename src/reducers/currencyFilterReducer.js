import { CHANGE_CURRENCY_FILTER } from '../constants/actionTypes'

const currencyFilterReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case CHANGE_CURRENCY_FILTER:
            return action.activeCurrency

        default:
            return state
    }
}

export default currencyFilterReducer
