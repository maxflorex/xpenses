import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/userSlice'
import { clean } from '../redux/slices/stytchSlice'

const Navigation = () => {
    const [showModal, setShowModal] = useState(false)
    const username: any = useSelector((state: any) => state.userState.value.username)


    const dispatch = useDispatch()

    // LOGOUT
    const logOut = (e: any) => {

        e.preventDefault()

        dispatch(logout())
        dispatch(clean())
    }

    // SHOW OR HIDE LOGOUT MODAL
    const show = () => {
        setShowModal(true)

        setTimeout(() => {
            setShowModal(false)
        }, 5000)

    }

    return (
        <div className='full'>
            <a href='/' className="row">
                <h2>Money</h2>
                <i className="ri-money-dollar-circle-fill"></i>
            </a>
            <div className="row">
                <div className='row' onClick={() => setShowModal(!showModal)} style={{ cursor: 'pointer' }}>
                    <h4 onMouseEnter={show}>{username !== '' ? username : 'Login'}</h4>
                    <i className="ri-user-fill"></i>
                </div>

                {/* MODAL */}
                {showModal &&
                    <div className='balance signout-modal'>
                        <button className='btn' onClick={logOut}>Sign Out</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navigation