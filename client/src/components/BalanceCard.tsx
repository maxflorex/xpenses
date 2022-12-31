import { useMutation } from '@apollo/client'
import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { UPDATE_USER, USER_LOGIN } from '../api/mutations/expense.mutations'
import { Context } from '../context/toggleUpdateContext'
import UpdateBalanceModal from './modals/UpdateBalanceModal'

const BalanceCard = () => {
    const expenses: any = useSelector((state: any) => state.expenseState.value.expenses)
    const [current] = useContext(Context)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [newBalance, setNewBalance] = useState('')

    let sum = 0

    if (expenses?.length > 0) {
        for (let i = 0; expenses?.length > i; i++) {
            sum = sum + expenses[i].amount
        }
    }

    const total = current.balance - sum

    const [updateUser]: any = useMutation(UPDATE_USER, {
        variables: { id: current.id, balance: parseFloat(newBalance) },
        refetchQueries: [{ query: USER_LOGIN, variables: { userId: current.id } }],
    })

    return (
        <>
            <div className="row">
                <div className="balance">
                    <div className='card-amount mod'>
                        <h4>Total Spent</h4>
                        <h2>L {sum.toFixed(2)}</h2>
                    </div>
                    {current?.balance !== 0 && (
                        <div className='card-amount'>
                            <h4>Remaining Balance</h4>
                            <h2>L {total.toFixed(2)}</h2>
                        </div>)}
                </div>
                {current?.balance !== 0 ? (
                    <div className="balance mod">
                        <div className='card-amount'>
                            <h4>{showUpdateForm ? 'Update Balance' : 'Bank Balance'}</h4>

                            {showUpdateForm
                                ? <input type="number" className='update-input' />
                                : <h2>L {current?.balance?.toFixed(2)}</h2>
                            }

                        </div>
                        <div>
                            <button className='btn' onClick={() => setShowUpdateForm(!showUpdateForm)}>{showUpdateForm ? 'Close' : 'Update Balance'}</button>
                        </div>
                    </div>
                ) : (
                    <div className="balance">
                        <div className="column">
                            {showUpdateForm && <input type="number" className='update-input' />}
                            <h3>{showUpdateForm ? 'Close' : 'Bank Balance'}</h3>
                            <button className='btn' onClick={() => setShowUpdateForm(!showUpdateForm)}>{showUpdateForm ? 'Close' : 'Add Balance'}</button>
                        </div>
                    </div>

                )}
            </div>
            {/* <UpdateBalanceModal setShowUpdateForm={setShowUpdateForm} /> */}
        </>
    )
}

export default BalanceCard