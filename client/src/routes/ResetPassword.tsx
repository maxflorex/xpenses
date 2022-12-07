import React, { useState } from 'react'
import { useStytch } from '@stytch/react'

type Props = {}

const ResetPassword = (props: Props) => {
    const [newPass, setNewPass] = useState('')
    const stytchClient = useStytch()
    const token : any = new URLSearchParams(window.location.search).get("token")

    const handleChange = (e: any) => {
        setNewPass(e.target.value)
    }

    const resetPassword = () => {
        stytchClient.passwords.resetByEmail({
            token,
            password: newPass,
            session_duration_minutes: 60
        })
    }

    return (
        <form>
            <input type="text" onChange={handleChange} />
            <button className="btn">Reset Password</button>
        </form>
    )
}

export default ResetPassword