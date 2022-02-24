import styled from 'styled-components'

export const P1 = styled.p`
    font-size: 1.25rem;
    line-height: 1.6875rem;
    -webkit-letter-spacing: 0;
    -moz-letter-spacing: 0;
    -ms-letter-spacing: 0;
    letter-spacing: 0;
    margin: 0;
    font-style: normal;
    text-align: left;
    font-weight: 700;
`

export const P2 = styled.p`
    font-size: 0.875rem;
    color: rgb(33, 37, 41);
`

export const Wrapper = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`