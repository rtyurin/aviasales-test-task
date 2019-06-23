import { CURRENCY_RATES_SUCCESS } from '../constants/actionTypes'

const currencyRatesSuccessAction = rates => {
    return {
        type: CURRENCY_RATES_SUCCESS,
        rates
    }
}

export default currencyRatesSuccessAction
