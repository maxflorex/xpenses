import { useMutation } from '@apollo/client'
import { current } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { DELETE_ALL_EXPENSES } from '../../api/mutations/expense.mutations'
import { GET_EXPENSES } from '../../api/queries/expenses.queries'
import DeleteConfirmationModal from './DeleteConfirmationModal'

type Props = {
    setShowDeleteAll: any,
    setShowSidebar: any
}

const DeleteAllModal = ({ setShowDeleteAll, setShowSidebar }: Props) => {
    const id: any = useSelector((state: any) => state.currentState.value.id)

    console.log(id);


    const exitModal = (e: any) => {
        if (e.target.classList.contains('close')) {
            setShowDeleteAll(false)
            setShowSidebar(false)
            document.body.style.overflow = 'visible'
        }
    }

    const [deleteAllJobs]: any = useMutation(DELETE_ALL_EXPENSES, {
        variables: { id: id },
        refetchQueries: [{ query: GET_EXPENSES, variables: { userId: id } }],
    })

    const handleDeleteAllJobs = (e: React.SyntheticEvent) => {
        e.preventDefault()
        deleteAllJobs(id)
        exitModal(e)
    }


    return (
        <>
            <div className='modal close' onClick={exitModal} >
                <div className="column" style={{ justifyItems: 'center' }}>
                    <h1>Are you sure?</h1>
                    <p>You're about to delete all your expenses!</p>
                    <div className="row">
                        <button className="btn close" onClick={handleDeleteAllJobs}>Yes, delete</button>
                        <button className="btn2 close" onClick={exitModal}>No, exit</button>
                    </div>
                </div>
                <div className='btn-close'>
                    <i className="ri-close-fill close" onClick={exitModal}></i>
                </div>
            </div>
        </>
    )
}

export default DeleteAllModal