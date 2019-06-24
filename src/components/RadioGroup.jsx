import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'

const HiddenInput = styled.input`
    position: absolute;
    height: 0;
    width: 0;
`

const Radio = styled.label`
    display: block;
    width: 100%;
    cursor: pointer;
    padding: 11px 21px;
    font-size: 12px;
    font-weight: 600;
    color: ${props => (props.checked ? '#fff' : '#2196f3')};
    background-color: ${props => (props.checked ? '#2196f3' : 'inherit')};
    border-right: solid 1px ${props => (props.checked ? '#2196f3' : '#d2d5d6')};

    :last-child {
        border-right: none;
        border-radius: 0 5px 5px 0;
    }

    :first-child {
        border-radius: 5px 0 0 5px;
    }

    :hover {
        background-color: ${props => (props.checked ? '#2196f3' : '#f2fcff')};
    }
`

const Wrapper = styled.div`
    display: flex;
    border-radius: 6px;
    border: solid 1px #d2d5d6;
`

const RadioGroup = ({ name, options, onChange, activeValue }) => {
    return (
        <Wrapper>
            {options.map(option => {
                return (
                    <Radio
                        key={option.id}
                        checked={option.value === activeValue}
                    >
                        <HiddenInput
                            type="radio"
                            id={option.id}
                            name={name}
                            value={option.value}
                            checked={option.value === activeValue}
                            onChange={e => onChange(e.target.value)}
                        />
                        {option.value}
                    </Radio>
                )
            })}
        </Wrapper>
    )
}

RadioGroup.propTypes = {
    name: pt.string.isRequired,
    activeValue: pt.string,
    options: pt.arrayOf(pt.object),
    onChange: pt.func
}

RadioGroup.defaultProps = {
    options: [],
    activeValue: '',
    onChange: () => {}
}

export default React.memo(RadioGroup)
