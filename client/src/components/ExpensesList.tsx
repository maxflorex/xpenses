import { useState } from 'react'
import { useSelector } from 'react-redux'
import Actions from './Actions'
import Table from './Table'

const ExpensesList = () => {

    const expenses: any = useSelector((state: any) => state.expenseState.value.expenses)
    const [sortBy, setSortBy] = useState({
        name: true,
        amount: false
    })

    return (<>
        <Actions setSortBy={setSortBy} sortBy={sortBy} />
        <div className="container">
            {
                expenses && expenses.length > 0 ? (
                    <Table sortBy={sortBy} expenses={expenses} />
                ) : (<h2>No expenses</h2>)
            }
        </div>
    </>
    )
}

export default ExpensesList