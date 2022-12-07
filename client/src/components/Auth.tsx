import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

type Props = {}

const Auth = (props: Props) => {
    const [show, setShow] = useState(true)

    return (
        < div style={{ display: 'flex' }}>
            <div className={`hero auth ${!show && 'sign-up'}`}>
                {show ? <LoginForm setShow={setShow} /> : <SignUpForm setShow={setShow} />}
            </div>
            <div className='present'>
                <i className="ri-money-dollar-circle-fill"></i>
                <h1>Xpenses</h1>
                <p>Let's get it together</p>
            </div>
        </div>
    )
}

export default Auth