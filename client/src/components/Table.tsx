import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DeleteModal from './modals/DeleteModal'
import EditFormModal from './modals/EditFormModal'
import TableRow from './TableRow'

type Props = {
    sortBy: any,
    expenses: any
}

const Table = ({ sortBy, expenses }: Props) => {
    const current: any = useSelector((state: any) => state.currentState.value)
    const [showDelete, setShowDelete] = useState<Boolean>(false)
    const [showEdit, setShowEdit] = useState<Boolean>(false)
    const [selected, setSelected] = useState({})
    const [sorted, setSorted] = useState([])

    // DESTRUCTURE
    const { name, amount } = sortBy

    console.log(expenses.length);



    // SORT BY NAME
    const byName = async () => {
        const filtered = await expenses.sort((a: any, b: any) => a.title > b.title ? 1 : -1)
        return setSorted(filtered)
    }

    // SORT BY AMOUNT
    const byAmount = async () => {
        const filtered = expenses.sort((a: any, b: any) => b.amount - a.amount)
        return setSorted(filtered)
    }

    useEffect(() => {
        if (name && !amount) {
            byName()
        } else if (amount && !name) {
            byAmount()
        }
    }, [sortBy])



    return (
        <>
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

                    {expenses && name && sorted.map((item: any, i: number) => (
                        <tr key={i}>
                            <TableRow {...item} setShowDelete={setShowDelete} setShowEdit={setShowEdit} setSelected={setSelected} />
                        </tr>
                    ))}
                    {expenses && amount && sorted.map((item: any, i: number) => (
                        <tr key={i}>
                            <TableRow {...item} setShowDelete={setShowDelete} setShowEdit={setShowEdit} setSelected={setSelected} />
                        </tr>
                    ))}

                </tbody>
            </table>
            {showDelete && <DeleteModal setShowDelete={setShowDelete} selected={selected} />}
            {showEdit && <EditFormModal setShowEdit={setShowEdit} selected={selected} />}
        </>
    )
}

export default Table