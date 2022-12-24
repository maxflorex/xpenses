import React, { useState } from 'react'

type Props = {}

const ResetPassword = (props: Props) => {
    const [newPass, setNewPass] = useState('')



    return (
        <form>
            <input type="text" />
            <button className="btn">Reset Password</button>
        </form>
    )
}

export default ResetPassword