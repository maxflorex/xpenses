import { useMutation } from '@apollo/client'
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { NEW_EXPENSE } from '../api/mutations/expense.mutations'
import { GET_EXPENSES } from '../api/queries/expenses.queries'
import { Context } from '../context/toggleUpdateContext'

const FormExpense = () => {
    const [toggleUpdate, setToggleUpdate] = useContext(Context)
    const current: any = useSelector((state: any) => state.currentState.value)
    const { id } = current
    const [formValues, setFormValues] = useState({
        title: '',
        paidBy: '',
        paidWith: '',
        amount: '',
        userId: id
    })
    const { title, paidBy, paidWith, amount, userId } = formValues

    // TODO ADD EXPENSE

    const [addExpense]: any = useMutation(NEW_EXPENSE, {
        variables: { title, paidWith, paidBy, amount: parseFloat(amount), userId: id },
        refetchQueries: [{ query: GET_EXPENSES, variables: { userId: id } }],
    })

    // ! ONCHANGE HANDLER
    const handleChange = (e: any) => {
        setFormValues({
            ...formValues, [e.target.name]: e.target.value
        })
    }

    // ! CLEANER
    const clearForm = (e: any) => {
        e.preventDefault()
        setFormValues({
            title: '',
            paidBy: '',
            paidWith: '',
            amount: '',
            userId: id
        })

    }

    // SUBMIT FUNCTION
    const handleSubmit = (e: any) => {
        e.preventDefault()

        // EMPTY FIELD CHECKER
        if (title === '' || paidBy === '' || paidWith === '' || amount === '') {
            return alert('Please, make sure all fields are filled in correctly')
        } else {
            addExpense(title, paidWith, paidBy, amount, userId).then(() => {
                console.log('Submitted');                
            }).catch(() => {
                console.log('Something went wrong...');
            }).finally(() => {
                clearForm(e)
            })
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2 className='span-2'>Add New Expense</h2>
                <input type="text" placeholder='Description...' name='title' onChange={handleChange} value={title} />
                <input type="number" placeholder='Amount...' name='amount' onChange={handleChange} value={amount} />
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
        </div>
    )
}

export default FormExpense