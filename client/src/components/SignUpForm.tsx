import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../api/mutations/expense.mutations'
import { currentUser } from '../redux/slices/currentUser'

type Props = {
    setShow: any
}

const SignUpForm = ({ setShow }: Props) => {

    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        pw: '',
        password2: ''
    })

    const { username, email, pw, password2 } = newUser
    const dispatch = useDispatch()

    // SIGN UP
    const [addUser]: any = useMutation(ADD_USER, {
        variables: { username, email, pw }
    })

    // HANDLE CHANGE
    const handleChange = (e: any) => {
        setNewUser({
            ...newUser, [e.target.name]: e.target.value
        })
    }


    // SIGNUP
    const signUp = (e: any) => {
        e.preventDefault()

        if (pw === password2) {
            addUser(username, email, pw).then((res: any) => {
                const user = res.data.addUser
                dispatch(currentUser(user))
            }).catch(() => {
                alert('Wrong ID or Password');
            })
        } else {
            alert('Passwords do not match')
        }
    }


    return (
        <form onSubmit={signUp} className='login-form'>
            <h2>Sign Up</h2>
            <label htmlFor="">Username</label>
            <input type="text" name='username' value={username} placeholder='Enter your username...'
                onChange={handleChange}
            />
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={email} placeholder='Enter your email...'
                onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input type="password" name='pw' value={pw} placeholder='Enter your password...'
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