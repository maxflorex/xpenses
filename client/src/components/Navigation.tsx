import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signoutCurrent } from '../redux/slices/currentUser'
import { cleanUserExpenses } from '../redux/slices/expenseSlice'
import DeleteProfileModal from './modals/DeleteProfileModal'
import EditProfileFormModal from './modals/EditProfileFormModal'
import EditProfileModal from './modals/EditProfileSidebar'

const Navigation = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const current: any = useSelector((state: any) => state.currentState.value)
    const { username } = current
    const [showEditProfile, setShowEditProfile] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showForm, setShowForm] = useState(false)

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
                    {!showModal
                        ? <i className="ri-arrow-down-s-line"></i>
                        : <i className="ri-arrow-up-s-line"></i>
                    }
                </div>

                {/* MODAL */}
                {showModal &&
                    <div className='balance signout-modal'>
                        <span className='link' onClick={() => setShowEditProfile(true)}>
                            Edit Profile
                        </span>
                        <button className='btn' onClick={logOut}>Sign Out</button>
                    </div>
                }
            </div>

            {/* MODALS */}
            {showEditProfile && <EditProfileModal setShow={setShowEditProfile} setShowDelete={setShowDelete} setShowForm={setShowForm} />}
            {showDelete && <DeleteProfileModal setShowDelete={setShowDelete} setShow={setShowEditProfile} current={current} />}
            {showForm && <EditProfileFormModal setShowForm={setShowForm} setShow={setShowEditProfile} current={current} />}
        </div>
    )
}

export default Navigation