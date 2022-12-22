import { useQuery } from '@apollo/client'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_USERS } from '../api/queries/expenses.queries'
import Auth from '../components/Auth'
import ExpensesList from '../components/ExpensesList'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import { cleanUsers, getAllUsers } from '../redux/slices/allUsersSlice'


const Home = () => {

	const [isLogged, setIsLogged] = useState<boolean>(false)
	const username: any = useSelector((state: any) => state.userState.value.username)
	const myRes: any = useSelector((state: any) => state.stytchState.value)
	const allUsers: any = useSelector((state: any) => state.allUsersState.value)
	const { loading, error, data } = useQuery(GET_USERS)
	const dispatch = useDispatch()

	console.log(username)



	// * CHECK IF LOGGED IN
	useEffect(() => {
		if (username !== '') {
			setIsLogged(true)
		} else {
			setIsLogged(false)
		}
	}, [username])

	// FILTER USER FROM DB
	useEffect(() => {

		if (!loading && !error) {
			dispatch(getAllUsers(data.users))
		}

		// 	if (data && username !== '') {
		// 		const filtered = data.users.filter((usr: any) => {
		// 			return usr.email === username
		// 		})
		// 		setCurrentUser(filtered[0])
		// 	} 

	}, [])


	// AUTO LOGOUT



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