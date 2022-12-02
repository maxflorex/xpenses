import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_EXPENSES } from '../api/queries/expenses.queries'
import Actions from './Actions'
import Table from './Table'

type Props = {}

const ExpensesList = (props: Props) => {
    const [sortBy, setSortBy] = useState({
        name: true,
        amount: false
    })

    const { loading, error, data } = useQuery(GET_EXPENSES)

    if (loading) return null
    if (error) return <p>Something is not right ☹</p>

    return (<>
        <Actions setSortBy={setSortBy} sortBy={sortBy} />
        <div className="container">
            <Table data={data} sortBy={sortBy} />
        </div>
    </>
    )
}

export default ExpensesList