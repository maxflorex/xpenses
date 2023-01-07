import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_USER } from '../../api/mutations/expense.mutations'
import { GET_EXPENSES } from '../../api/queries/expenses.queries'
import { currentUser } from '../../redux/slices/currentUser'

type Props = {
	setShowForm: any,
	setShow: any,
	current: any
}

const EditProfileFormModal = ({ setShowForm, setShow, current }: Props) => {
	const dispatch = useDispatch()
	const [formValues, setFormValues] = useState({
		id: current.id,
		username: current.username,
		email: current.email,
		balance: current.balance,
	})

	const { username, email, balance } = formValues

	// UPDATE BALANCE
	const [updateUser]: any = useMutation(UPDATE_USER, {
		variables: { id: current.id, email, username, balance: parseFloat(balance) },
		refetchQueries: [{ query: GET_EXPENSES, variables: { userId: current.id } }],
	})

	const exitModal = (e: any) => {
		if (e.target.classList.contains('close')) {
			setShowForm(false)
			setShow(false)
		}
	}

	const clearForm = (e: any) => {
		e.preventDefault()
		setFormValues({
			id: current.id,
			username: '',
			email: '',
			balance: '',
		})
	}

	const handleChange = (e: any) => {
		setFormValues({
			...formValues, [e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()

		updateUser(current.id, email, username, balance).then(() => {
			const nb = parseFloat(balance)
			dispatch(currentUser({ id: current.id, username: username, email: email, balance: nb }))
		}).catch((err: any) => {
			console.log('Something went wrong!', err);
		}).finally(() => {
			setShowForm(false)
			setShow(false)
		})
	}

	return (
		<div className='modal close' onClick={exitModal}>
			<div className="column" style={{justifyItems: 'center'}}>
				<h1>Edit Profile</h1>

				{/* FORM */}
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder='Username...' name='username' onChange={handleChange} value={username} />
					<input type="text" placeholder='Email...' name='email' onChange={handleChange} value={email} />
					<input type="number" placeholder='Balance...' name='balance' onChange={handleChange} value={balance} />
					<span />
					<button className="btn2" type='submit'>Update</button>
					<button className="btn3" onClick={(e) => clearForm(e)}>Clear Form</button>
				</form>

				<div className="column">
					<p style={{fontSize: '12px'}}>Warning: If you chance your username, this will replace the previous one used at login</p>
				</div>

			</div>
		</div>
	)
}

export default EditProfileFormModal