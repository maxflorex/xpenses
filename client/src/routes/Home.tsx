import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_EXPENSES, GET_USERS } from '../api/queries/expenses.queries'
import Auth from '../components/Auth'
import ExpensesList from '../components/ExpensesList'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import { userExpenses } from '../redux/slices/expenseSlice'


const Home = () => {

	const [isLogged, setIsLogged] = useState<boolean>(false)
	const current: any = useSelector((state: any) => state.currentState.value)
	const { username } = current
	const dispatch = useDispatch()
	const { loading, error, data } = useQuery(GET_EXPENSES, { variables: { userId: current?.id || '' } })

	// * CHECK IF LOGGED IN
	useEffect(() => {
		if (username) {
			setIsLogged(true)
		} else {
			setIsLogged(false)
		}
	}, [username])


	// GET EXPENSES BY USER
	useEffect(() => {
		if (!loading && !error && data) {
			dispatch(userExpenses(data))
		}
	}, [current])


	//  * LOGIN OR REGISTER
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