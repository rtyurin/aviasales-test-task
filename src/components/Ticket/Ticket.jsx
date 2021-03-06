import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import priceByCurrencySelector from '../../selectors/priceByCurrencySelector'
import Button from './Button.jsx'
import AirCompanyLogo from './AirCompanyLogo.jsx'
import FlightBrief from './FlightBrief.jsx'

const TicketWrapper = styled.div`
    display: flex;
    width: 566px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 4px 0 rgba(91, 137, 164, 0.25);
`

const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
    padding: 25px 20px 25px 20px;
    border-right: 1px solid #eceff1;
`

const RightBlock = styled.div`
    width: 100%;
    padding: 17px 25px 0 25px;
`

const Ticket = props => {
    const { carrier, price, currency, ...rest } = props

    return (
        <TicketWrapper>
            <LeftBlock>
                <AirCompanyLogo carrier={carrier} />
                <Button currency={currency} price={price} />
            </LeftBlock>
            <RightBlock>
                <FlightBrief {...rest} />
            </RightBlock>
        </TicketWrapper>
    )
}

Ticket.propTypes = {
    carrier: pt.string.isRequired,
    currency: pt.string.isRequired,
    price: pt.number.isRequired,
    arrivalDate: pt.string.isRequired,
    arrivalTime: pt.string.isRequired,
    departureDate: pt.string.isRequired,
    departureTime: pt.string.isRequired,
    destination: pt.string.isRequired,
    destinationName: pt.string.isRequired,
    origin: pt.string.isRequired,
    originName: pt.string.isRequired,
    stops: pt.number.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    price: priceByCurrencySelector({ ...state, price: ownProps.price }),
    currency: state.currencyFilter
})

export default connect(mapStateToProps)(Ticket)
