import React, { useState } from 'react'
import styled from 'styled-components'

import RadioGroup from '../RadioGroup.jsx'

const Wrapper = styled.div`
    margin-bottom: 30px;
`

const CurrencyFilter = () => {
    // TODO: use redux
    // this is just a presentation how this switcher could work, without changing currency logic
    const [activeCurrency, setCurrency] = useState('RUB')
    return (
        <Wrapper>
            <RadioGroup
                onChange={currency => setCurrency(currency)}
                name="currencies"
                activeValue={activeCurrency}
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

export default CurrencyFilter
