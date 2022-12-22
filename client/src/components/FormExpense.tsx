import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { ADD_EXPENSE } from '../api/mutations/expense.mutations'
// import { GET_USERS } from '../api/queries/expenses.queries'

const FormExpense = () => {

    // const ID = currentUser.id

    const [formValues, setFormValues] = useState({
        title: '',
        paidBy: '',
        paidWith: '',
        amount: ''
    })

    const { title, paidBy, paidWith, amount } = formValues

    // ADD EXPENSE
    // const [addExpense]: any = useMutation(ADD_EXPENSE, {
    //     variables: { id: ID, formValues },
    //     refetchQueries: [{ query: GET_USERS }]
    // })

    // ONCHANGE HANDLER
    const handleChange = (e: any) => {
        setFormValues({
            ...formValues, [e.target.name]: e.target.value
        })
    }

    // CLEANER
    const clearForm = (e: any) => {

        e.preventDefault()

        setFormValues({
            title: '',
            paidBy: '',
            paidWith: '',
            amount: ''
        })

    }

    // SUBMIT FUNCTION
    const handleSubmit = (e: any) => {
        e.preventDefault()

        // EMPTY FIELD CHECKER
        if (title === '' || paidBy === '' || paidWith === '' || amount === '') {
            return alert('Please, make sure all fields are filled in correctly')
        }

        // SUBMIT EXPENSE
        // addExpense(formValues).then(() => {
        //     console.log('Submitted!');
        // }).catch((error: any) => {
        //     console.log(error);
        // })

        // CLEAR FORM
        clearForm(e)
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
                <button className="btn2" type='submit'>Save</button>
                <button className="btn3" onClick={(e) => clearForm(e)}>Clear Form</button>
            </form>
        </div>
    )
}

export default FormExpense