import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Auth from '../components/Auth'
import ExpensesList from '../components/ExpensesList'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'


const Home = () => {

	const [isLogged, setIsLogged] = useState<boolean>(true)
	const username: any = useSelector((state: any) => state.userState.value.username)

	console.log(username);


	useEffect(() => {
		if (username) {
			setIsLogged(true)
		} else {
			setIsLogged(false)
		}
	}, [username])


	if (!isLogged) {
		return <Auth />
	}

	return (
		<div style={{ marginBottom: '4rem' }}>
			<Navigation />
			<Hero />
			<ExpensesList />
			<Footer />
		</div>
	)
}

export default Home