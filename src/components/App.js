import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import TicketList from './TicketList.jsx'
import getTicketList from '../actions/getTicketListAction'
import useDidMount from '../hooks/useDidMount'
import Logo from './Logo.jsx'

import response from '../constants/response.json'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`

const App = ({ getTickets, ticketsList }) => {
    useDidMount(() => {
        getTickets()
    })

    return (
        <Container>
            <Logo />
            <TicketList list={ticketsList} />
        </Container>
    )
}

App.propTypes = {
    getTickets: pt.func,
    ticketsList: pt.array
}

App.defaultProps = {
    getTickets: () => {},
    ticketsList: []
}

export default connect(
    state => ({
        ticketsList: state.tickets.list
    }),
    dispatch => ({
        getTickets: () => dispatch(getTicketList(response.tickets))
    })
)(App)
