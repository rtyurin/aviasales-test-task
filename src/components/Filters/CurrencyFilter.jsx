import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import changeCurrencyFilterAction from '../../actions/changeCurrencyFilterAction'
import RadioGroup from '../RadioGroup.jsx'

const Wrapper = styled.div`
    margin-bottom: 30px;
`

const CurrencyFilter = ({ currencyFilter, changeCurrencyFilter }) => {
    return (
        <Wrapper>
            <RadioGroup
                onChange={changeCurrencyFilter}
                name="currencies"
                activeValue={currencyFilter}
                options={[
                    {
                        id: 'RUB',
                        value: 'RUB'
                    },
                    {
                        id: 'USD',
                        value: 'USD'
                    },
                    {
                        id: 'EUR',
                        value: 'EUR'
                    }
                ]}
            />
        </Wrapper>
    )
}

CurrencyFilter.propTypes = {
    currencyFilter: pt.string.isRequired,
    changeCurrencyFilter: pt.func.isRequired
}

const mapStateToProps = ({ currencyFilter }) => ({
    currencyFilter
})

const mapDispatchToProps = dispatch => ({
    changeCurrencyFilter: activeCurrency =>
        dispatch(changeCurrencyFilterAction(activeCurrency))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyFilter)
