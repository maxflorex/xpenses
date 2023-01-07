import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_EXPENSES } from '../api/queries/expenses.queries'
import Auth from '../components/Auth'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Table from '../components/Table'
import { Context } from '../context/toggleUpdateContext'
import { userExpenses } from '../redux/slices/expenseSlice'


const Home = () => {
	const dispatch = useDispatch()
	const [isLogged, setIsLogged] = useState<boolean>(false)
	const current: any = useSelector((state: any) => state.currentState.value)
	const { username } = current
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
	}, [current, data, loading])


	//  * LOGIN OR REGISTER
	if (!isLogged) {
		return <Auth />
	}

	return (
		<Context.Provider value={[current]}>
			<div style={{ marginBottom: '4rem' }}>
				<Navigation />
				<Hero />
				<Table />
			</div>
		</Context.Provider>
	)
}

export default Home