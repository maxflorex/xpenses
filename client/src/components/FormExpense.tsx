import React, { useState } from 'react'

type Props = {}

const FormExpense = (props: Props) => {
    const [formValues, setFormValues] = useState({
        title: '',
        paidBy: '',
        paidWith: '',
        amount: ''
    })

    const { title, paidBy, paidWith, amount } = formValues

    const handleChange = (e: any) => {

        setFormValues({
            ...formValues, [e.target.name]: e.target.value
        })
    }

    const clearForm = (e: any) => {

        e.preventDefault()

        setFormValues({
            title: '',
            paidBy: '',
            paidWith: '',
            amount: ''
        })

    }

    const handleSubmit = (e: any) => {
        e.preventDeafult()
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2 className='span-2'>Add New Expense</h2>
                <input type="text" placeholder='Description...' name='title' onChange={handleChange} value={title} />
                <input type="text" placeholder='Amount...' name='amount' onChange={handleChange} value={amount} />
                <select name='paidBy' onChange={handleChange} value={paidBy}>
                    <option hidden={true} >Select a person</option>
                    <option value="Max">Max</option>
                    <option value="Jare">Jare</option>
                </select>
                <select name='paidWith' onChange={handleChange} value={paidWith}>
                    <option hidden={true} >Select Payment</option>
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                </select>
                <button className="btn2">Save</button>
                <button className="btn3" onClick={(e) => clearForm(e)}>Clear Form</button>
            </form>
        </div>
    )
}

export default FormExpense