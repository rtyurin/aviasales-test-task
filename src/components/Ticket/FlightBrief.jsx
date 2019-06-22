import React, { Fragment } from 'react'
import pt from 'prop-types'
import styled from 'styled-components'

import addLeadingZero from '../../utils/addLeadingZero'
import { getFullDate, getWeekday } from '../../utils/dates'
import FlightLayovers from './FlightLayovers.jsx'

const CityName = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #4a4a4a;
    text-align: ${props => props.textAlign};
`

const FlightDate = styled.div`
    font-size: 12px;
    color: #8b9497;
    text-align: ${props => props.textAlign};
`

const BriefContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
`

const Time = styled.div`
    font-size: 32px;
    color: #4a4a4a;
`

const FlightBrief = ({
    arrivalDate,
    arrivalTime,
    departureDate,
    departureTime,
    destination,
    destinationName,
    origin,
    originName,
    stops
}) => {
    return (
        <Fragment>
            <BriefContent>
                <Time>{addLeadingZero(departureTime)}</Time>
                <FlightLayovers stopsCount={stops} />
                <Time>{addLeadingZero(arrivalTime)}</Time>
            </BriefContent>
            <BriefContent>
                <div>
                    <CityName textAlign="left">
                        {origin}, {originName}
                    </CityName>
                    <FlightDate textAlign="left">
                        {getFullDate(departureDate)},{' '}
                        {getWeekday(departureDate)}
                    </FlightDate>
                </div>
                <div>
                    <CityName textAlign="right">
                        {destination}, {destinationName}
                    </CityName>
                    <FlightDate textAlign="right">
                        {getFullDate(arrivalDate)}, {getWeekday(arrivalDate)}
                    </FlightDate>
                </div>
            </BriefContent>
        </Fragment>
    )
}

FlightBrief.propTypes = {
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

export default FlightBrief
