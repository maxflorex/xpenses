import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER } from '../../api/mutations/expense.mutations'
import { signoutCurrent } from '../../redux/slices/currentUser'
import { cleanUserExpenses } from '../../redux/slices/expenseSlice'

const DeleteConfirmationModal = () => {
    const dispatch = useDispatch()
    const [usr, setUsr] = useState('')
    const current: any = useSelector((state: any) => state.currentState.value)

    const [deleteUser]: any = useMutation(DELETE_USER, {
        variables: { id: current.id }
    })

    const handleDeleteUser = () => {
        if (usr === current.username) {
            deleteUser(usr).then(() => {
                console.log('Your account has been deleted');
            }).catch((err: any) => {
                console.log('Oops!', err);
            }).finally(() => {
                dispatch(signoutCurrent())
                dispatch(cleanUserExpenses())
            })
        } else {
            alert('Type again')
        }
    }

    return (
        <div className='column' style={{ justifyItems: 'center' }}>
            <label>Type <span style={{ fontSize: '1.4rem', fontWeight: 'bolder' }}>{current.username}</span> to delete</label>
            <div className="row">
                <input type="text" value={usr} onChange={(e) => setUsr(e.target.value)} />
                <button className="btn" onClick={handleDeleteUser}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteConfirmationModal