import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GET_USERS } from '../api/queries/expenses.queries'
import Auth from '../components/Auth'
import ExpensesList from '../components/ExpensesList'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'


const Home = () => {

	const [isLogged, setIsLogged] = useState<boolean>(false)
	const [currentUser, setCurrentUser] = useState({})
	const username: any = useSelector((state: any) => state.userState.value.username)
	// const myRes: any = useSelector((state: any) => state.stytchState.value)
	const { loading, error, data } = useQuery(GET_USERS)

	// console.log(myRes);
	

	useEffect(() => {

		if (username !== '') {
			setIsLogged(true)
		} else {
			setIsLogged(false)
		}

		if (data) {
			const filtered = data.users.filter((usr: any) => {
				return usr.email === username
			})

			setCurrentUser(filtered)

		}
	}, [username, data])


	if (!isLogged) {
		return <Auth />
	}


	return (
		<div style={{ marginBottom: '4rem' }}>
			<Navigation />
			<Hero />
			{/* <ExpensesList /> */}
			<Footer />
		</div>
	)
}

export default Home