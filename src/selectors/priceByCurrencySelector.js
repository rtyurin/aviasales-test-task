import { createSelector } from 'reselect'

export default createSelector(
    state => state.currencyFilter,
    state => state.currencyRates,
    state => state.price,
    (currencyFilter, currencyRates, priceInRub) => {
        if (currencyFilter === 'RUB') {
            return priceInRub
        }

        if (currencyRates[currencyFilter]) {
            return parseInt(
                (priceInRub * currencyRates[currencyFilter]).toFixed(0),
                10
            )
        }

        return priceInRub
    }
)
