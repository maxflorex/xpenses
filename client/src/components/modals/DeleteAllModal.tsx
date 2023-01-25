import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import DeleteConfirmationModal from './DeleteConfirmationModal'

type Props = {
    setShowDeleteAll: any,
    current: any,
    setShowForm: any
}

const DeleteAllModal = ({ setShowDeleteAll, current, setShowForm }: Props) => {
    const [confirmation, setConfirmation] = useState(false)

    const exitModal = (e: any) => {
        if (e.target.classList.contains('close')) {
            setShowDeleteAll(false)
            setShowForm(false)
        }
    }

    const handleDelete = () => {
        setConfirmation(true)
    }

    // const [deleteUser]: any = useMutation(DELETE_USER, {
    //     variables: { id: id }
    // })

    // const [deleteAllJobs]: any = useMutation(DELETE_ALL_JOBS, {
    //     variables: { id: id },
    //     refetchQueries: [{ query: GET_JOBS, variables: { userId: id } }],
    // })

    return (
        <>
            <div className='modal close' onClick={exitModal} >
                {!confirmation ? (

                    <div className="column" style={{ justifyItems: 'center' }}>
                        <h1>Are you sure?</h1>
                        <p>You're about to delete all your expenses!</p>
                        <div className="row">
                            <button className="btn" onClick={handleDelete}>Yes, delete</button>
                            <button className="btn2 close" onClick={exitModal}>No, exit</button>
                        </div>
                    </div>

                ) : (

                    <DeleteConfirmationModal current={current} />

                )}
                <div className='btn-close'>
                    <i className="ri-close-fill close" onClick={exitModal}></i>
                </div>
            </div>
        </>
    )
}

export default DeleteAllModal