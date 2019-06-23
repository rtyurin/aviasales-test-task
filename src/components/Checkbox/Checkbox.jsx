import React, { useState } from 'react'
import pt from 'prop-types'

import {
    ExtraButton,
    StyledCheckbox,
    CheckmarkIcon,
    CheckboxContainer,
    HiddenCheckbox,
    Label,
    RowContainer,
    Wrapper
} from './styles'

import check from '../../public/check.svg'

const Checkbox = ({
    checked,
    id,
    name,
    onClick,
    label,
    extraButton,
    onExtraButtonClick
}) => {
    const [extraButtonVisible, toggleExtraButton] = useState(false)

    return (
        <Wrapper
            onMouseEnter={() => toggleExtraButton(true)}
            onMouseLeave={() => toggleExtraButton(false)}
        >
            <RowContainer onClick={() => onClick(id)}>
                <CheckboxContainer>
                    <HiddenCheckbox
                        id={id}
                        name={name}
                        checked={checked}
                        onChange={() => onClick(id)}
                    />
                    <StyledCheckbox checked={checked}>
                        <CheckmarkIcon
                            enabled={checked}
                            src={check}
                            alt="checked"
                        />
                    </StyledCheckbox>
                    <Label onClick={e => e.preventDefault()} htmlFor={id}>
                        {label}
                    </Label>
                </CheckboxContainer>
            </RowContainer>
            {extraButton && (
                <ExtraButton
                    visible={extraButtonVisible}
                    onClick={() => onExtraButtonClick(id)}
                >
                    {extraButton}
                </ExtraButton>
            )}
        </Wrapper>
    )
}

Checkbox.propTypes = {
    checked: pt.bool,
    name: pt.oneOfType([pt.string, pt.number]).isRequired,
    id: pt.oneOfType([pt.string, pt.number]).isRequired,
    label: pt.string,
    extraButton: pt.string,
    onClick: pt.func,
    onExtraButtonClick: pt.func
}

Checkbox.defaultProps = {
    checked: false,
    label: '',
    extraButton: '',
    onClick: () => {},
    onExtraButtonClick: () => {}
}

export default React.memo(Checkbox)
