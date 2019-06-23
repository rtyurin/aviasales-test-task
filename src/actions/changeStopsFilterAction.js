import { CHANGE_STOPS_FILTER } from '../constants/actionTypes'

const changeStopsFilterAction = activeStops => {
    return {
        type: CHANGE_STOPS_FILTER,
        activeStops
    }
}

export default changeStopsFilterAction
