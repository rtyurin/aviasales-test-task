import {
    CURRENCY_RATES_SUCCESS,
    CURRENCY_RATES_ERROR
} from '../constants/actionTypes'

const currencyRatesReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case CURRENCY_RATES_SUCCESS:
            return action.rates

        case CURRENCY_RATES_ERROR:
            const defaultRates = {
                EUR: 0.0139822789,
                USD: 0.0158223468
            }

            return defaultRates
        default:
            return state
    }
}

export default currencyRatesReducer
