import { GET_LIST } from '../constants/actionTypes'
import convertSnakeToCamel from '../utils/convertSnakeToCamel'

const ticketsReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case GET_LIST:
            const convertedList = convertSnakeToCamel(action.ticketList)
            const sortedList = convertedList.sort((a, b) => a.price - b.price)

            return {
                ...state,
                list: sortedList
            }

        default:
            return state
    }
}

export default ticketsReducer
