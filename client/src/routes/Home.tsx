import React, { useState } from 'react'
import Login from '../components/Login'

type Props = {}

const Home = (props: Props) => {

	// const [isLogged, setIsLogged] = useState<boolean>(false)

	// if (!isLogged) {
	//   return <Login />
	// }

	return (
		<div className="container">
			<div className="grid-3">
				<div className='balance'>
					<p>First </p>
				</div>
				<div className='span-2'>2</div>
			</div>
		</div>
	)
}

export default Home