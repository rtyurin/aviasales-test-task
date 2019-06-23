import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    cursor: pointer;
`

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`

const RowContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin: 0 -15px;
    padding: 7px 15px;

    ${Wrapper}:hover & {
        background-color: #f1fcff;
    }
`

const CheckmarkIcon = styled.img`
    position: absolute;
    top: 4px;
    left: 3px;
`

const Label = styled.label`
    margin-left: 11px;
    font-size: 13px;
    vertical-align: top;
    cursor: pointer;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    // Hide checkbox visually but remain accessible to screen readers.
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const StyledCheckbox = styled.div`
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => (props.checked ? '#f2fcff' : '#fff')};
    border: solid 1px ${props => (props.checked ? '#2196f3' : '#d2d5d6')};
    border-radius: 3px;
`

const ExtraButton = styled.div`
    position: absolute;
    color: #2196f3;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    right: 0;
    top: 50%;
    letter-spacing: 0.5px;
    transform: translateY(-50%);
    opacity: ${props => (props.visible ? 1 : 0)};
    transition: opacity 0.1s;
    user-select: none;

    :hover {
        color: #ff9d1b;
    }
`

export {
    ExtraButton,
    StyledCheckbox,
    CheckmarkIcon,
    CheckboxContainer,
    HiddenCheckbox,
    Label,
    RowContainer,
    Wrapper
}
