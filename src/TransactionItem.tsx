import React from 'react'
import styled from 'styled-components'

const P1 = styled.p`
    font-size: 1rem;
    line-height: 1.35rem;
    letter-spacing: 0px;
    margin: 0px;
    font-weight: 400;
    font-style: normal;
    text-align: left;
`

const P2 = styled.p`
    font-size: 0.875rem;
    color: rgb(134, 142, 150);
`


export const TransactionItem = () => {
    return(
        <div>
            <P1>USA Company</P1>
            <P2>Transaction ID # QAPY10511109</P2>
        </div>
    )
}