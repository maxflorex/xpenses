import React, { useState } from 'react'
import { useStytch } from '@stytch/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/userSlice'

interface Props {
    setShow: any
}

const LoginForm = ({ setShow }: Props) => {

    const [newUser, setNewUser] = useState({
        email: '',
        password: ''
    })
    const { email, password } = newUser
    const stytchClient = useStytch()
    const dispatch = useDispatch()


    // HANDLE CHANGE

    const handleChange = (e: any) => {
        setNewUser({
            ...newUser, [e.target.name]: e.target.value
        })
    }


    // SIGNIN

    const signIn = (e: any) => {

        e.preventDefault()

        stytchClient.passwords
            .authenticate({ email, password, session_duration_minutes: 60 })
            .then((res: any) => {
                return null
            })
            .then(() => {
                dispatch(login({ username: email }))
            })
            .catch((err: any) => {
                alert('Oops! Something went wrong. Try again 🤞')
                console.log(err);
            })
    }

    return (
        <form onSubmit={signIn} className='login-form'>
            <h2>Login</h2>
            <label htmlFor="">Username</label>
            <input type="text" name='email' value={email} placeholder='Enter your username...'
                onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={password} placeholder='Enter your username...'
                onChange={handleChange}
            />
            <div className="row" style={{ marginTop: ' 1rem' }}>
                <button className='btn' type='submit'>Login</button>
                <button className='btn2' onClick={() => setShow(false)}>Signup</button>
            </div>
            <Link to='/reset-password'>Forgot your password?</Link>
        </form>
    )
}

export default LoginForm