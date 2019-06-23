import React, { Fragment } from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'

import changeStopsFilterAction from '../../actions/changeStopsFilterAction'
import isAllTrue from '../../utils/isAllTrue'
import {
    makeAllValuesFalse,
    makeAllValuesTrue
} from '../../utils/makeAllValues'
import Checkbox from '../Checkbox/Checkbox.jsx'

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

const StopsFilter = ({ stopsFilter, changeStopsFilter }) => {
    return (
        <Fragment>
            <Checkbox
                checked={isAllTrue(stopsFilter)}
                label="Все"
                name="all"
                id="all"
                onClick={() =>
                    changeStopsFilter(
                        isAllTrue(stopsFilter)
                            ? makeAllValuesFalse(stopsFilter)
                            : makeAllValuesTrue(stopsFilter)
                    )
                }
            />
            {checkboxes.map(checkbox => (
                <Checkbox
                    key={checkbox.id}
                    id={checkbox.id}
                    checked={stopsFilter[checkbox.id]}
                    label={checkbox.label}
                    name={checkbox.name}
                    onClick={() =>
                        changeStopsFilter({
                            ...stopsFilter,
                            [checkbox.id]: !stopsFilter[checkbox.id]
                        })
                    }
                    extraButton={checkbox.extraButton}
                    onExtraButtonClick={() =>
                        changeStopsFilter({
                            ...makeAllValuesFalse(stopsFilter),
                            [checkbox.id]: true
                        })
                    }
                />
            ))}
        </Fragment>
    )
}

StopsFilter.propTypes = {
    stopsFilter: pt.object.isRequired,
    changeStopsFilter: pt.func.isRequired
}

const mapStateToProps = ({ stopsFilter }) => ({
    stopsFilter
})
const mapDispatchToProps = dispatch => ({
    changeStopsFilter: activeStops =>
        dispatch(changeStopsFilterAction(activeStops))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StopsFilter)
