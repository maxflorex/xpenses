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
                <div className='card-amount mod'>
                    <h4>Total Spent</h4>
                    <h2>L {sum.toFixed(2)}</h2>
                </div>
                <div className='card-amount'>
                    <h4>Remaining Balance</h4>
                    <h2>L {total.toFixed(2)}</h2>
                </div>
            </div>
            {current?.balance !== 0 ? (
                <div className="balance mod">
                    <div className='card-amount mod2'>
                        <h4>Bank Balance</h4>
                        <h2>L {current?.balance?.toFixed(2)}</h2>
                    </div>
                    <div>
                        <button className='btn2 mod'>Update Balance</button>
                    </div>
                </div>
            ) : (
                <div className="balance mod">
                    <h3>Bank Balance</h3>
                    <button className='btn'>Add Balance</button>
                </div>

            )}
        </div>
    )
}

export default BalanceCard