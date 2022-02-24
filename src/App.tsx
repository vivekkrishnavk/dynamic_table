import React from 'react';
import { P1, P2, Wrapper } from './AppStyles'
import { DateSelector } from './DateSelector';
import { TransactionItem } from './TransactionItem';
import { AmountText } from './AmountText';
import { TransactionStatus } from './TransactionStatus';
import { Table } from './Table';
import TxnStatusIcon from './TxnItem.svg'

function App() {
    let columns = React.useMemo(():any => [
        {
            Header: () => <P1>Recent Activity</P1>,
            accessor: 'recentActivity',
            columns: [
                {
                    Header: '',
                    accessor: 'bs',
                    columns: [
                        {
                            Header: 'type',
                            accessor: 'type'
                        },
                        {
                            Header: 'transaction',
                            accessor: 'transaction'
                        }
                    ]
                }
            ]
        },
        {
            Header: () => <P1>Download CSV</P1>,
            accessor: 'downloadCSV',
            columns: [
                {
                    Header: () => <DateSelector />,
                    accessor: 'dateSelector',
                    columns: [
                        {
                            Header: 'date',
                            accessor: 'date'
                        },
                        {
                            Header: 'amount',
                            accessor: 'amount'
                        },
                        {
                            Header: 'status',
                            accessor: 'status'
                        },
                    ]
                }
            ]
        }
    ],[]);
    
    const data = React.useMemo(() => [ {
        type: <img src={TxnStatusIcon} alt="TxnStatusIcon" />,
        transaction: <TransactionItem />,
        date: <P2>{'17 Feb, 2022'}</P2>,
        amount: <AmountText />,
        status: <TransactionStatus />
    },
    {
        type: <img src={TxnStatusIcon} alt="TxnStatusIcon" />,
        transaction: <TransactionItem />,
        date: <P2>{'17 Feb, 2022'}</P2>,
        amount: <AmountText />,
        status: <TransactionStatus />
    },
    {
        type: <img src={TxnStatusIcon} alt="TxnStatusIcon" />,
        transaction: <TransactionItem />,
        date: <P2>{'17 Feb, 2022'}</P2>,
        amount: <AmountText />,
        status: <TransactionStatus />
    },
    {
        type: <img src={TxnStatusIcon} alt="TxnStatusIcon" />,
        transaction: <TransactionItem />,
        date: <P2>{'17 Feb, 2022'}</P2>,
        amount: <AmountText />,
        status: <TransactionStatus />
    },
    {
        type: <img src={TxnStatusIcon} alt="TxnStatusIcon" />,
        transaction: <TransactionItem />,
        date: <P2>{'17 Feb, 2022'}</P2>,
        amount: <AmountText />,
        status: <TransactionStatus />
    }   
    ],[]);
    
    return (
        <div className="App">
            <Wrapper>
                <Table columns={columns} data={data} />
            </Wrapper>
        </div>
    );
}

export default App;
