import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'
import Ticket from './Ticket/Ticket.jsx'

const TicketsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const TicketList = ({ list }) => {
    return (
        <TicketsContainer>
            {list.map((ticket, i) => {
                return <Ticket key={`${i + ticket.price}`} {...ticket} />
            })}
        </TicketsContainer>
    )
}

TicketList.propTypes = {
    list: pt.array
}

TicketList.defaultProps = {
    list: []
}

export default TicketList
