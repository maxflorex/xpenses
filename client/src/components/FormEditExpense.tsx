import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { UPDATE_EXPENSE } from '../api/mutations/expense.mutations'
import { GET_EXPENSE } from '../api/queries/expenses.queries'

type Props = {
    selected: any,
    setShowEdit: any
}

const FormEditExpense = ({ selected, setShowEdit }: Props) => {
    const [formValues, setFormValues] = useState({
        title: selected.title,
        paidBy: selected.paidBy,
        paidWith: selected.paidWith || '',
        amount: selected.amount,
    })

    const { title, paidBy, paidWith, amount } = formValues
    const id = selected.id

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

    const [updateExpense]: any = useMutation(UPDATE_EXPENSE, {
        variables: { id: id, title, paidBy, paidWith, amount },
        refetchQueries: [{ query: GET_EXPENSE, variables: { id: id } }]
    })

    const handleSubmit = (e: any) => {

        e.preventDefault()

        if (title === '' || paidBy === '' || paidWith === '' || amount === '') {
            return alert('Please, make sure all fields are filled in correctly')
        }

        updateExpense(title, paidBy, paidWith, amount).then(() => {
            console.log('Updated!');
        })

        setShowEdit(false)
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button className="btn2" type='submit'>Save</button>
            <button className="btn3" onClick={(e) => clearForm(e)}>Clear Form</button>
        </form>
    )
}

export default FormEditExpense