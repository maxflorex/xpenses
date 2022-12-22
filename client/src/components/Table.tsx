import React, { useState } from 'react'
import DeleteModal from './modals/DeleteModal'
import EditFormModal from './modals/EditFormModal'
import TableRow from './TableRow'

type Props = {
    currentUser: any,
    sortBy: any
}

const Table = ({ currentUser, sortBy }: Props) => {
    const [showDelete, setShowDelete] = useState<Boolean>(false)
    const [showEdit, setShowEdit] = useState<Boolean>(false)
    const [selected, setSelected] = useState({})

    // DESTRUCTURE
    const { name, amount } = sortBy

    // // SORT BY NAME
    // const byName = [...data.expenses].sort((a, b) => a.title > b.title ? 1 : -1)

    // // SORT BY AMOUNT
    // const byAmount = [...data.expenses].sort((a, b) => b.amount - a.amount)

    


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
                    {/* 
                    {name && byName.map((item, i) => (
                        <tr key={i}>
                            <TableRow {...item} setShowDelete={setShowDelete} setShowEdit={setShowEdit} setSelected={setSelected} />
                        </tr>
                    ))}
                    {amount && byAmount.map((item, i) => (
                        <tr key={i}>
                            <TableRow {...item} setShowDelete={setShowDelete} setShowEdit={setShowEdit} setSelected={setSelected} />
                        </tr>
                    ))} */}

                </tbody>
            </table>
            {showDelete && <DeleteModal setShowDelete={setShowDelete} selected={selected} />}
            {showEdit && <EditFormModal setShowEdit={setShowEdit} selected={selected} />}
        </>
    )
}

export default Table