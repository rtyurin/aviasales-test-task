import { createSelector } from 'reselect'

import isAllTrue from '../utils/isAllTrue'

const allTicketsSelector = state => state.tickets.list
const stopsFilterSelector = state => state.stopsFilter

export default createSelector(
    allTicketsSelector,
    stopsFilterSelector,
    (allTickets = [], stopsFilter = {}) => {
        if (isAllTrue(stopsFilter)) {
            return allTickets
        }

        return allTickets.filter(ticket => stopsFilter[ticket.stops])
    }
)
