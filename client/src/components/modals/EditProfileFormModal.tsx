import React, { useState } from 'react'

type Props = {
	setShowForm: any,
	setShow: any
}

const EditProfileFormModal = ({ setShowForm, setShow }: Props) => {
	const [formValues, setFormValues] = useState({
		username: '',
		email: '',
		balance: '',
	})

	const { username, email, balance } = formValues

	const exitModal = (e: any) => {
		if (e.target.classList.contains('close')) {
			setShowForm(false)
			setShow(false)
		}
	}

	const clearForm = (e: any) => {
		e.preventDefault()
		setFormValues({
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

	const handleSubmit = () => {

	}

	return (
		<div className='modal close' onClick={exitModal}>
			<div className="column">
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


			</div>
		</div>
	)
}

export default EditProfileFormModal