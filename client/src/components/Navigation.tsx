import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signoutCurrent } from '../redux/slices/currentUser'
import { cleanUserExpenses } from '../redux/slices/expenseSlice'

const Navigation = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const current: any = useSelector((state: any) => state.currentState.value)
    const { username } = current

    // LOGOUT
    const logOut = (e: any) => {
        e.preventDefault()
        dispatch(signoutCurrent())
        dispatch(cleanUserExpenses())
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
                    <h4 onMouseEnter={show}>Hi, {username !== '' ? username : 'Login'}</h4>
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