import React, { useState } from 'react'
import DeleteModal from './modals/DeleteModal'
import TableRow from './TableRow'

type Props = {
    data: any,
    sortBy: any
}

const Table = ({ data, sortBy }: Props) => {
    const [showDelete, setShowDelete] = useState<Boolean>(false)
    const { name, amount } = sortBy

    // SORT BY NAME
    const byName = [...data.expenses].sort((a, b) => a.title > b.title ? 1 : -1)

    // SORT BY AMOUNT
    const byAmount = [...data.expenses].sort((a, b) => b.amount - a.amount)

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
                    {name && byName.map((item, i) => (
                        <tr key={i}>
                            <TableRow {...item} setShowDelete={setShowDelete} />
                        </tr>
                    ))}
                    {amount && byAmount.map((item, i) => (
                        <tr key={i}>
                            <TableRow {...item} setShowDelete={setShowDelete} />
                        </tr>
                    ))}
                </tbody>
            </table>
            {showDelete && <DeleteModal setShowDelete={setShowDelete} />}
        </>
    )
}

export default Table