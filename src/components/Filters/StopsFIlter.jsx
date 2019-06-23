import React, { useState } from 'react'
import styled from 'styled-components'

import isAllTrue from '../../utils/isAllTrue'
import makeAllValuesFalse from '../../utils/makeAllValuesFalse'
import Checkbox from '../Checkbox/Checkbox.jsx'

const Wrapper = styled.div``

const checkboxes = [
    {
        id: 0,
        name: '0-stops',
        label: 'Без пересадок',
        extraButton: 'только'
    },
    {
        id: 1,
        name: '1-stop',
        label: '1 пересадка',
        extraButton: 'только'
    },
    {
        id: 2,
        name: '2-stops',
        label: '2 пересадки',
        extraButton: 'только'
    },
    {
        id: 3,
        name: '3-stops',
        label: '3 пересадки',
        extraButton: 'только'
    }
]

const StopsFilter = () => {
    // TODO: use redux on #task2
    // this is only a presentation how it could work, without any filtering logic
    const initialState = {
        0: true,
        1: true,
        2: true,
        3: true
    }
    const [filters, changeFilter] = useState(initialState)

    return (
        <Wrapper>
            <Checkbox
                checked={isAllTrue(filters)}
                label="Все"
                name="all"
                id="all"
                onClick={() =>
                    changeFilter(
                        isAllTrue(filters)
                            ? makeAllValuesFalse(initialState)
                            : initialState
                    )
                }
            />
            {checkboxes.map(checkbox => (
                <Checkbox
                    key={checkbox.id}
                    id={checkbox.id}
                    checked={filters[checkbox.id]}
                    label={checkbox.label}
                    name={checkbox.name}
                    onClick={() =>
                        changeFilter({
                            ...filters,
                            [checkbox.id]: !filters[checkbox.id]
                        })
                    }
                    extraButton={checkbox.extraButton}
                    onExtraButtonClick={() =>
                        changeFilter({
                            ...makeAllValuesFalse(filters),
                            [checkbox.id]: true
                        })
                    }
                />
            ))}
        </Wrapper>
    )
}

export default StopsFilter
