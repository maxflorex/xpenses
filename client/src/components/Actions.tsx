import React, { useState } from 'react'
import FormExpense from './FormExpense'

type SortBy = {
    sortBy: any,
    setSortBy: any,
}

const Actions = ({ sortBy, setSortBy }: SortBy) => {
    const [showForm, setShowForm] = useState<Boolean>(false)

    return (
        <>
            <div className='container'>
                <div className="row">
                    <button className='btn' onClick={() => setShowForm(!showForm)}>{!showForm ? 'Add Expense' : 'Close Form'}</button>
                    <button className='btn-outlined' onClick={() => setSortBy({ name: !sortBy.name, amount: false })}>Sort By Title</button>
                    <button className='btn-outlined' onClick={() => setSortBy({ amount: !sortBy.amount, name: false })}>Sort By Amount</button>
                </div>
            </div>
            {showForm && <FormExpense />}
        </>
    )
}

export default Actions