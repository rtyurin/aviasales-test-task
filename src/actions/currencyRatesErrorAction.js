import { CURRENCY_RATES_ERROR } from '../constants/actionTypes'

const currencyRatesErrorAction = () => {
    return {
        type: CURRENCY_RATES_ERROR
    }
}

export default currencyRatesErrorAction
