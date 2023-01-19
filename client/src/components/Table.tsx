import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FormExpense from './FormExpense'
import DeleteModal from './modals/DeleteModal'
import EditFormModal from './modals/EditFormModal'
import TableRow from './TableRow'

const Table = () => {
    const expenses: any = useSelector((state: any) => state.expenseState.value.expenses)
    const [sorted, setSorted] = useState([])
    const [showDelete, setShowDelete] = useState<Boolean>(false)
    const [showEdit, setShowEdit] = useState<Boolean>(false)
    const [selected, setSelected] = useState({})
    const [showForm, setShowForm] = useState<Boolean>(false)

    // SORT BY NAME
    const byName = async (arr: any) => {
        const s: any = [...arr].sort((a: any, b: any) => a.title > b.title ? 1 : -1)
        setSorted(s)
    }

    // SORT BY AMOUNT
    const byAmount = async (arr: any) => {
        const s: any = [...arr].sort((a: any, b: any) => b.amount - a.amount)
        setSorted(s)
    }

    useEffect(() => {
        if (expenses) {
            setSorted(expenses)
        }
    }, [expenses])

    return (
        <>

            {/* ACTIONS */}
            <div className='container column'>
                <div className="row">

                    <button className='btn' onClick={() => setShowForm(!showForm)}>{!showForm ? 'Add Expense' : 'Close'}</button>
                    {expenses && expenses.length > 0 && <>
                        <button className='btn-outlined' onClick={() => byName(expenses)}>Sort By Title</button>
                        <button className='btn-outlined' onClick={() => byAmount(expenses)}>Sort By Amount</button>
                    </>
                    }
                </div>
                {showForm &&
                    <div style={{ width: '100%' }}>
                        <FormExpense setShowForm={setShowForm} />
                    </div>}
            </div>


            {/* TABLE */}
            {expenses && expenses.length > 0 &&
                <div className="container">
                    <table>
                        <thead>
                            <tr className='heading'>
                                <th>#</th>
                                <th>Expense</th>
                                <th>By</th>
                                <th>Paid With</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sorted?.map((item: any, i: number) => (
                                <tr key={i}>
                                    <TableRow {...item} setShowDelete={setShowDelete} setShowEdit={setShowEdit} setSelected={setSelected} index={i} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
            {showDelete && <DeleteModal setShowDelete={setShowDelete} selected={selected} />}
            {showEdit && <EditFormModal setShowEdit={setShowEdit} selected={selected} />}
        </>
    )
}

export default Table