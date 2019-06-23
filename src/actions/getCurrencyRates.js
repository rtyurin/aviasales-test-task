import currencyRatesSuccessAction from './currencyRatesSuccessAction'
import currencyRatesErrorAction from './currencyRatesErrorAction'

const getCurrencyRates = () => {
    return dispatch => {
        fetch('https://api.exchangeratesapi.io/latest?base=RUB&symbols=USD,EUR')
            .then(response => {
                if (!response.ok) {
                    throw Error('service unavailable')
                }

                return response
            })
            .then(response => response.json())
            .then(response =>
                dispatch(currencyRatesSuccessAction(response.rates))
            )
            .catch(() => dispatch(currencyRatesErrorAction()))
    }
}

export default getCurrencyRates
