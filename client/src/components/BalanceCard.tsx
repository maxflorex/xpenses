import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

type Total = {
    total: Object
}

const BalanceCard = () => {
    const [total, setTotal] = useState<Total[]>([])
    const current: any = useSelector((state: any) => state.currentState.value)    

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
                    <h4>Bank Balance</h4>
                    <h2>L {current.balance ? current.balance : 'No balance'}</h2>
                </div>
                <div>
                    <button className='btn'>Update Balance</button>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard