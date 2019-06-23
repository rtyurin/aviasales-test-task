import { CHANGE_CURRENCY_FILTER } from '../constants/actionTypes'

const changeCurrencyFilterAction = activeCurrency => {
    return {
        type: CHANGE_CURRENCY_FILTER,
        activeCurrency
    }
}

export default changeCurrencyFilterAction
