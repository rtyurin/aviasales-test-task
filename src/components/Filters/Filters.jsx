import React from 'react'
import styled from 'styled-components'

import CurrencyFilter from './CurrencyFilter.jsx'
import StopsFilter from './StopsFIlter.jsx'

const FiltersWrapper = styled.div`
    width: 232px;
    height: 100%;
    margin-right: 20px;
    padding: 15px 15px 20px;
    border-radius: 5px;
    box-shadow: 0 1px 4px 0 rgba(91, 137, 164, 0.25);
`

const FilterTitle = styled.h2`
    font-size: 12px;
    font-weight: 600;
    color: #4a4a4a;
    text-transform: uppercase;
    margin-bottom: 10px;
`

const Filters = () => {
    return (
        <FiltersWrapper>
            <FilterTitle>Валюта</FilterTitle>
            <CurrencyFilter />
            <FilterTitle>Количество пересадок</FilterTitle>
            <StopsFilter />
        </FiltersWrapper>
    )
}

export default Filters
