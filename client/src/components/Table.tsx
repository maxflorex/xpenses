import { useEffect, useState } from 'react'
import { useDisableScroll } from '../hooks/useDisableScroll'
import FormExpense from './FormExpense'
import DeleteModal from './modals/DeleteModal'
import EditFormModal from './modals/EditFormModal'
import TableRow from './TableRow'

type Props = {
    expenses: any,
    sorted: any,
    setSorted: any
}

const Table = ({ expenses, sorted, setSorted }: Props) => {
    const [showDelete, setShowDelete] = useState<Boolean>(false)
    const [showEdit, setShowEdit] = useState<Boolean>(false)
    const [selected, setSelected] = useState({})
    const [showForm, setShowForm] = useState<Boolean>(false)
    const [sortBy, setSortBy] = useState({
        name: true,
        amount: false
    })
    const [open, setOpen] = useState(false)

    // DESTRUCTURE
    const { name, amount } = sortBy

    // SORT BY NAME
    const byName = [...expenses].sort((a: any, b: any) => a.title > b.title ? 1 : -1)

    // SORT BY AMOUNT
    const byAmount = [...expenses].sort((a: any, b: any) => b.amount - a.amount)

    useEffect(() => {
        if (name) {
            setSorted(byName)
        } else if (amount) {
            setSorted(byAmount)
        }
    }, [sortBy, expenses])

    return (
        <>
            <div className='container column'>
                <div className="row">

                    <button className='btn' onClick={() => setShowForm(!showForm)}>{!showForm ? 'Add Expense' : 'Close Form'}</button>
                    <button className='btn-outlined' onClick={() => setSortBy({ name: !sortBy.name, amount: false })}>Sort By Title</button>
                    <button className='btn-outlined' onClick={() => setSortBy({ amount: !sortBy.amount, name: false })}>Sort By Amount</button>
                </div>
                {showForm &&
                    <div style={{ width: '100%' }}>
                        <FormExpense />
                    </div>}
            </div>
            <div className="container">
                <table>
                    <thead>
                        <tr className='heading'>
                            <th>Title</th>
                            <th>By</th>
                            <th>Paid With</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sorted.map((item: any, i: number) => (
                            <tr key={i}>
                                <TableRow {...item} setShowDelete={setShowDelete} setShowEdit={setShowEdit} setSelected={setSelected} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showDelete && <DeleteModal setShowDelete={setShowDelete} selected={selected} />}
            {showEdit && <EditFormModal setShowEdit={setShowEdit} selected={selected} />}
        </>
    )
}

export default Table