import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'
import Ticket from './Ticket/Ticket.jsx'

const TicketsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.empty ? 'flex-start' : 'center')};
    flex-direction: column;
`

const EmptyWrapper = styled(TicketsContainer)`
    min-width: 566px;
    border-radius: 5px;
    box-shadow: 0 1px 4px 0 rgba(91, 137, 164, 0.25);
    height: 130px;
`

const TicketList = ({ list }) => {
    if (!list.length) {
        return (
            <TicketsContainer empty>
                <EmptyWrapper>Сделайте фильтры менее строгими</EmptyWrapper>
            </TicketsContainer>
        )
    }
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
