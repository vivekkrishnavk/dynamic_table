import React from 'react'
import styled from 'styled-components'

const P1 = styled.p`
    font-size: 0.875rem;
    margin: 0;
`

const P2 = styled.p`
    font-size: 0.875rem;
    color: rgb(134, 142, 150);
    margin: 0;
`


export const AmountText = () => {
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <P1>- AUD 550.00</P1>
            <P2>USD 395.73</P2>
        </div>
    )
}