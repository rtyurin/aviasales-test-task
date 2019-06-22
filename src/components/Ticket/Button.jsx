import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'

const TicketButton = styled.button`
    width: 160px;
    height: 56px;
    padding: 8px 10px;
    border-radius: 5px;
    background-color: #FF6D00;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    white-space: pre-wrap;
    font-weight: 600;
    transition: box-shadow, background-color .23s;
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 0 0 #d64d08;
    
    :hover {
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25), 0 1px 0 0 #f7661d;
        background-color: #ff8124;
    }
`

const RoubleSign = styled.span`
    font-family: Helvetica Neue, Arial, sans-serif;
    font-weight: normal;
`

const Button = ({ price }) => <TicketButton>Купить{'\n'}за {price}<RoubleSign>₽</RoubleSign></TicketButton>

Button.propTypes = {
    price: pt.number.isRequired
}

export default Button