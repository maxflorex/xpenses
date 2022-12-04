import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_EXPENSE } from '../../api/mutations/expense.mutations'
import { GET_EXPENSES } from '../../api/queries/expenses.queries'

type Props = {
    setShowDelete: any,
    selected: any
}

const DeleteModal = ({ setShowDelete, selected }: Props) => {

    const exitModal = (e: any) => {
        if (e.target.classList.contains('close')) {
            setShowDelete(false)
        }
    }

    const [deleteExpense]: any = useMutation(DELETE_EXPENSE, {
        variables: { id: selected.id },
        refetchQueries: [{ query: GET_EXPENSES }]
    })

    const handleDelete = (e: any) => {
        e.preventDefault()

        deleteExpense(selected.id).then(() => {
            console.log('Deleted');
        }).catch((error: any) => {
            console.log(error);
        })

        setShowDelete(false)
    }

    console.log(selected.id);
    

    return (
        <div className='modal close' onClick={exitModal}>
            <div className="column">
                <h1>Are you sure?</h1>
                <div className="row">
                    <button className="btn" onClick={handleDelete}>Yes, delete</button>
                    <button className="btn2 close" onClick={exitModal}>No, exit</button>
                </div>
                <div className='btn-close'>
                    <i className="ri-close-fill close" onClick={exitModal}></i>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal