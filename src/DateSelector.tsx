import React from 'react'

export const DateSelector = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p>Transaction Type</p>
            <select className="type">
                <option value="Withdraw">Withdraw</option>
                <option value="Send">Send</option>
                <option value="asdas">asdas</option>
                <option value="asdasdas">asdasdas</option>
            </select>
            <p>Date Range</p>
            <input type="date" />
        </div>
    )
}