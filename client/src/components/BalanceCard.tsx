import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
// import { GET_USERS } from '../api/queries/expenses.queries'

type Total = {
    total: Object
}

const BalanceCard = () => {
    const [total, setTotal] = useState<Total[]>([])
    // const { loading, error, data } = useQuery(GET_USERS)

    return (
        <div className="row">
            <div className="balance">
                <div>
                    <h4>Total Spent</h4>
                    <h2>$56,000.00</h2>
                </div>
                <div>
                    <h4>Remaining Balance</h4>
                    <h2>$56,000.00</h2>
                </div>
            </div>
            <div className="balance">
                <div>
                    <h4>Expected Balance</h4>
                    <h2>$56,060.00</h2>
                </div>
                <div>
                    <button className='btn'>Update Balance</button>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard