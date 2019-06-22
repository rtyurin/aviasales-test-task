import { GET_LIST } from '../constants/actionTypes'

const getTicketListAction = ticketList => {
    return {
        type: GET_LIST,
        ticketList
    }
}

export default getTicketListAction
