import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'
import plane from '../../public/plane.svg'

import plural from '../../utils/plural'
import { STOPS } from '../../constants/plurals'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 10px;
`

const StopsText = styled.div`
    font-weight: 600;
    font-size: 10px;
    color: #8b9497;
    text-transform: uppercase;
    text-align: center;
`

const FlightLineWithPlane = styled.div`
    display: flex;
    align-items: center;
`

const PlaneImg = styled.img`
    display: inline;
`

const FlightLine = styled.div`
    width: 96px;
    height: 1px;
    background-color: #d2d5d6;
`

const FlightLayovers = ({ stopsCount }) => {
    return (
        <Wrapper>
            {stopsCount > 0 && (
                <StopsText>
                    {stopsCount} {STOPS[plural(stopsCount)]}
                </StopsText>
            )}
            <FlightLineWithPlane>
                <FlightLine />
                <PlaneImg src={plane} alt="plane pic" />
            </FlightLineWithPlane>
        </Wrapper>
    )
}

FlightLayovers.propTypes = {
    stopsCount: pt.number.isRequired
}

export default React.memo(FlightLayovers)
