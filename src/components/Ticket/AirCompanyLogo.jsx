import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'

const Logo = styled.img`
    width: 120px;
    height: 35px;
    margin: 0 0 20px;
`

const AirCompanyLogo = ({ carrier }) => {
    return (
        <Logo
            alt={`${carrier} company logo`}
            src={`http://pics.avs.io/120/35/${carrier}.png`}
            srcSet={`http://pics.avs.io/120/35/${carrier}@2x.png 2x`}
        />
    )
}

AirCompanyLogo.propTypes = {
    carrier: pt.string.isRequired
}

export default React.memo(AirCompanyLogo)
