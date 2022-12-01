import { useQuery } from '@apollo/client'
import { GET_EXPENSES } from '../api/queries/expenses.queries'
import Table from './Table'

type Props = {}

const ExpensesList = (props: Props) => {

    const { loading, error, data } = useQuery(GET_EXPENSES)

    if (loading) return null
    if (error) return <p>Something is not right ☹</p>

    console.log(data);


    return (
        <div>
            <Table data={data} />
        </div>
    )
}

export default ExpensesList