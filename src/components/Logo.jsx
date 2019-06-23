import React from 'react'
import styled from 'styled-components'

import logo from '../public/logo.svg'

const AviaSalesLogo = styled.img`
    padding-top: 25px;
    margin: 0 auto 31px;
`

const Logo = () => <AviaSalesLogo alt="AviaSales logo" src={logo} />

export default Logo
