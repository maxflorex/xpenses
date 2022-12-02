import React from 'react'

type Props = {}

const BalanceCard = (props: Props) => {
    return (
        <div className="balance">
            <div>
                <h4>Bank Balance</h4>
                <h2>$56,000.00</h2>
            </div>
            <div>
                <h4>Expected Balance</h4>
                <h2>$56,060.00</h2>
            </div>
            <div>
                <button className='btn'>Update Balance</button>
            </div>
        </div>
    )
}

export default BalanceCard