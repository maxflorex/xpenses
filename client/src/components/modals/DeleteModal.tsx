import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DELETE_EXPENSE } from '../../api/mutations/expense.mutations'
import { GET_EXPENSES } from '../../api/queries/expenses.queries'

type Props = {
    setShowDelete: any,
    selected: any
}

const DeleteModal = ({ setShowDelete, selected }: Props) => {
    const current: any = useSelector((state: any) => state.currentState.value)
    const { id } = current
    const idDelete = selected.id

    const exitModal = (e: any) => {
        if (e.target.classList.contains('close')) {
            setShowDelete(false)
        }
    }

    const [deleteExpense]: any = useMutation(DELETE_EXPENSE, {
        variables: { id: idDelete },
        refetchQueries: [{ query: GET_EXPENSES, variables: { userId: id } }],
    })

    const handleDelete = (e: any) => {
        e.preventDefault()

        deleteExpense(idDelete).then(() => {
            console.log('Deleted');
        }).catch((error: any) => {
            console.log('Oops!', error);
        })

        setShowDelete(false)
    }

    useEffect(() => {
        if (selected.id) {
            document.body.style.overflow = 'auto' 
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selected])

    console.log(idDelete);
    

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