import React, { useState } from 'react'
import { login, logout } from '../components/store'
import { useDispatch, useSelector } from 'react-redux'

type Props = {}

const Login = (props: Props) => {
    const [newUsername, setNewUsername] = useState<string>('')

    const dispatch = useDispatch()
    const username = useSelector((state: any) => state.user.value.username)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(login({ username: newUsername }))
        setNewUsername('')
    }

    return (
        <div className='container'>
            <h1>{username}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" value={newUsername} placeholder='Enter your username...'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNewUsername(e.target.value) }}
                />
                <button className='btn' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login