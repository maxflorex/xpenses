
import { useSelector } from 'react-redux'

const BalanceCard = () => {
    const current: any = useSelector((state: any) => state.currentState.value)
    const expenses: any = useSelector((state: any) => state.expenseState.value.expenses)

    let sum = 0


    if (expenses?.length > 0) {
        for (let i = 0; expenses?.length > i; i++) {
            sum = sum + expenses[i].amount
        }
    }

    const total = current.balance - sum

    return (
        <div className="row">
            <div className="balance">
                <div>
                    <h4>Total Spent</h4>
                    <h2>L {sum.toFixed(2)}</h2>
                </div>
                <div>
                    <h4>Remaining Balance</h4>
                    <h2>L {total.toFixed(2)}</h2>
                </div>
            </div>
            <div className="balance">
                <div>
                    <h4>Bank Balance</h4>
                    <h2>L {current?.balance?.toFixed(2)}</h2>
                </div>
                <div>
                    <button className='btn'>Update Balance</button>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard