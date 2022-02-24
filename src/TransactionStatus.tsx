import React from 'react'
import styled from 'styled-components'

const P1 = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: rgb(134, 142, 150);
    margin-left: 1rem;
`

const P2 = styled.div`
   font-size: 0.875rem;
    color: rgb(134, 142, 150);
    margin-left: 0.5rem;
`

export const TransactionStatus = () => {
    return(
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <P1></P1>
            <P2>Processing</P2>
        </div>
    )
}