import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ExpensesList from '../components/ExpensesList'
import Hero from '../components/Hero'
import Login from '../components/Login'

type Props = {}

const Home = (props: Props) => {

	const [isLogged, setIsLogged] = useState<boolean>(false)
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
		<>
			<Hero />

			<div className="container">
				<div className="grid-3">
					<div className='balance'>
						<p>First </p>
					</div>
					<div className='span-2'>
						<ExpensesList />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home