import React, { useState } from 'react'
import { useStytch } from '@stytch/react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/userSlice'

type Props = {
    setShow: any
}

const SignUpForm = ({ setShow }: Props) => {

    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        password2: ''
    })

    const { email, password, password2 } = newUser
    const stytchClient = useStytch()
    const dispatch = useDispatch()


    // LOGIN
    const signIn = (e: any) => {
        e.preventDefault()
        stytchClient.passwords
            .authenticate({ email, password, session_duration_minutes: 60 })
            .then((res: any) => {
                console.log(`Welcome, ${email}!`)
            })
            .then(() => {
                dispatch(login({ username: email }))
            })
            .catch((err: any) => {
                console.log('Err:', err);
            })
    }


    // HANDLE CHANGE
    const handleChange = (e: any) => {
        setNewUser({
            ...newUser, [e.target.name]: e.target.value
        })
    }


    // SIGNUP
    const signUp = (e: any) => {
        e.preventDefault()

        stytchClient.passwords
            .strengthCheck({ email, password })
            .then((res: any) => {
                console.log('Success', res)
            })
            .catch((err: any) => {
                console.log('Err:', err);
            })

        if (password === password2) {
            stytchClient.passwords.create({
                email,
                password,
                session_duration_minutes: 60
            }).then(() => {
                signIn(e)
            }).catch((err) => {
                console.log(err);
            })
        } else {
            alert('Passwords do not match')
        }
    }

    return (
        <form onSubmit={signUp} className='login-form'>
            <h2>Sign Up</h2>
            <label htmlFor="">Username</label>
            <input type="text" name='email' value={email} placeholder='Enter your username...'
                onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={password} placeholder='Enter your password...'
                onChange={handleChange}
            />
            <label htmlFor="">Confirm Password</label>
            <input type="password" name='password2' value={password2} placeholder='Confirm your password...'
                onChange={handleChange}
            />
            <div style={{ marginTop: ' 1rem' }}>
                <button className='btn2' type='submit'>Signup</button>
                <p onClick={() => setShow(true)}>Already registered?</p>
            </div>
        </form>
    )
}

export default SignUpForm