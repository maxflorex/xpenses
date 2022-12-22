import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/slices/userSlice'
import { useMutation } from '@apollo/client'
import { USER_LOGIN } from '../api/mutations/expense.mutations'
import { GET_USERS } from '../api/queries/expenses.queries'

interface Props {
    setShow: any
}

const LoginForm = ({ setShow }: Props) => {
    const [current, setCurrent] = useState([])
    const [newUser, setNewUser] = useState({
        username: '',
        pw: ''
    })
    const { username, pw } = newUser
    const dispatch = useDispatch()

    // LOGIN
    const [userLogin]: any = useMutation(USER_LOGIN, {
        variables: { username, pw },
        refetchQueries: [{ query: GET_USERS }]
    })


    // HANDLE CHANGE

    const handleChange = (e: any) => {
        setNewUser({
            ...newUser, [e.target.name]: e.target.value
        })
    }

    // SIGNIN

    const signIn = (e: any) => {

        e.preventDefault()

        userLogin(username, pw).then((res: any) => {

            const user = res.data.userLogin
            dispatch(login({ username: user.username }))

        }).catch(() => {
            alert('Wrong ID or Password');
        })

    }


    return (
        <form onSubmit={signIn} className='login-form'>
            <h2>Login</h2>
            <label htmlFor="">Username</label>
            <input type="text" name='username' value={username} placeholder='Enter your username...'
                onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input type="password" name='pw' value={pw} placeholder='Enter your username...'
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