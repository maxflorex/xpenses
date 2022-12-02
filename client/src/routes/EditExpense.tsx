import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GET_EXPENSE } from '../api/queries/expenses.queries'

const EditExpense = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    paidBy: '',
    paidWith: '',
    amount: ''
  })

  let { id } = useParams()

  const { loading, error, data } = useQuery(GET_EXPENSE, { variables: { id } });

  if (loading) return null
  if (error) return <p>Something is not right ☹</p>


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

  return (
    <div className='container'>
      <div className='container'>
        <form>
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
    </div>
  )
}

export default EditExpense