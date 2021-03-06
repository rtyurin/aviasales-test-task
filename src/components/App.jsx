import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import TicketList from './TicketList.jsx'
import Filters from './Filters/Filters.jsx'
import getTicketList from '../actions/getTicketListAction'
import getCurrencyRatesAction from '../actions/getCurrencyRates'
import useDidMount from '../hooks/useDidMount'
import Logo from './Logo.jsx'
import ticketListSelector from '../selectors/ticketListSelector'

import response from '../constants/response.json'

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const App = ({ getTickets, ticketsList, getCurrencyRates }) => {
    useDidMount(() => {
        getTickets()
        getCurrencyRates()
    })

    return (
        <Container>
            <Logo />
            <ContentWrapper>
                <Filters />
                <TicketList list={ticketsList} />
            </ContentWrapper>
        </Container>
    )
}

App.propTypes = {
    getTickets: pt.func,
    getCurrencyRates: pt.func,
    ticketsList: pt.array
}

App.defaultProps = {
    getTickets: () => {},
    getCurrencyRates: () => {},
    ticketsList: []
}

export default connect(
    state => ({
        ticketsList: ticketListSelector(state)
    }),
    dispatch => ({
        getTickets: () => dispatch(getTicketList(response.tickets)),
        getCurrencyRates: () => dispatch(getCurrencyRatesAction())
    })
)(App)
