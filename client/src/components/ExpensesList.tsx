import { useState } from 'react'
import { useSelector } from 'react-redux'
import Table from './Table'

const ExpensesList = () => {
    const [sorted, setSorted] = useState([])
    const expenses: any = useSelector((state: any) => state.expenseState.value.expenses) || null

    console.log(expenses);

    return (<>
        {
            expenses && expenses.length > 0 ? (
                <Table expenses={expenses} sorted={sorted} setSorted={setSorted} />
            ) : (<div className='container'>
                <h2>No expenses</h2>
            </div>
            )}
    </>
    )
}

export default ExpensesList