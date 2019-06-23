import { CHANGE_STOPS_FILTER } from '../constants/actionTypes'

const stopsFilter = (state = {}, action = {}) => {
    switch (action.type) {
        case CHANGE_STOPS_FILTER:
            return {
                ...state,
                ...action.activeStops
            }

        default:
            return state
    }
}

export default stopsFilter
