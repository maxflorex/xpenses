import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Actions from '../components/Actions'
import ExpensesList from '../components/ExpensesList'
import Hero from '../components/Hero'
import Login from '../components/Login'

type Props = {}

const Home = (props: Props) => {



	const [isLogged, setIsLogged] = useState<boolean>(true)
	const username = useSelector((state: any) => state.user.value.username)

	useEffect(() => {
		if (username !== '') {
			setIsLogged(true)
		}
	}, [username])


	if (!isLogged) {
		return <Login />
	}

	return (
		<div style={{ marginBottom: '4rem' }}>
			<Hero />
			<ExpensesList />
		</div>
	)
}

export default Home