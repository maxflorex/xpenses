import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const Navigation = (props: Props) => {

    const username = useSelector((state: any) => state.user.value.username)

    return (
        <div className='full'>
            <div className="row">
                <h2>Money</h2>
                <i className="ri-money-dollar-circle-fill"></i>
            </div>
            <div className="row">
                <h4>{username !== '' ? username : 'Login'}</h4>
                <i className="ri-user-fill"></i>
            </div>
        </div>
    )
}

export default Navigation