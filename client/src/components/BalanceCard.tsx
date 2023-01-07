import { useMutation } from '@apollo/client'
import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_USER } from '../api/mutations/expense.mutations'
import { GET_EXPENSES } from '../api/queries/expenses.queries'
import { Context } from '../context/toggleUpdateContext'
import { currentUser } from '../redux/slices/currentUser'

const BalanceCard = () => {
    const expenses: any = useSelector((state: any) => state.expenseState.value.expenses)
    const [current] = useContext(Context)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [newBalance, setNewBalance] = useState('')
    const dispatch = useDispatch()
    const { id, username, email } = current

    let sum = 0

    if (expenses?.length > 0) {
        for (let i = 0; expenses?.length > i; i++) {
            sum = sum + expenses[i].amount
        }
    }

    const total = current.balance - sum


    // UPDATE BALANCE
    const [updateUser]: any = useMutation(UPDATE_USER, {
        variables: { id: current.id, balance: parseFloat(newBalance) },
        refetchQueries: [{ query: GET_EXPENSES, variables: { userId: current.id } }],
    })


    // HANDLE UPDATE
    const handleUpdate = (e: any) => {
        e.preventDefault()

        updateUser(current.id, newBalance).then(() => {
            const nb = parseFloat(newBalance)
            dispatch(currentUser({ id: id, username: username, email: email, balance: nb }))
        }).catch((err: any) => {
            console.log('Something went wrong!', err);
        }).finally(() => {
            setShowUpdateForm(false)
        })

    }

    return (
        <>
            <div className="row">
                {/* FIRST BALANCE COLUMN */}
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

                {/* SHOW IF THERE'S A BALANCE */}
                {current?.balance !== 0 &&
                    <div className="balance mod">
                        <div className='card-amount'>
                            <h4>{showUpdateForm ? 'Update Balance' : 'Bank Balance'}</h4>

                            {showUpdateForm
                                ? <input type="number" className='update-input' value={newBalance} onChange={(e) => setNewBalance(e.target.value)} />
                                : <h2>L {current?.balance?.toFixed(2)}</h2>
                            }

                        </div>

                        {/* SHOW IF NOT UPDATING */}
                        {!showUpdateForm &&
                            <div>
                                <button className='btn' onClick={() => setShowUpdateForm(!showUpdateForm)}>Update</button>
                            </div>}

                        {/* SHOW IF SHOWING UPDATE FORM */}
                        {showUpdateForm &&
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '0.6rem' }}>
                                    <button className='btn mod' onClick={handleUpdate}>Submit</button>
                                    <button className='btn3' onClick={() => setShowUpdateForm(!showUpdateForm)}>close</button>
                                </div>
                            </div>}
                    </div>}

                {/* SHOW IF BALANCE IS EMPTY */}
                {current?.balance === 0 &&
                    <div className="balance">
                        <div className="column">

                            {/* SHOW IF NOT UPDATING */}
                            {!showUpdateForm &&
                                <div>
                                    <button className='btn' onClick={() => setShowUpdateForm(!showUpdateForm)}>Add Balance</button>
                                </div>}

                            {/* SHOW IF SHOWING UPDATE FORM */}
                            {showUpdateForm &&
                                <div>
                                    <input type="number" className='update-input' value={newBalance} onChange={(e) => setNewBalance(e.target.value)} />
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '0.6rem' }}>
                                        <button className='btn mod' onClick={handleUpdate}>Submit</button>
                                        <button className='btn3' onClick={() => setShowUpdateForm(!showUpdateForm)}>close</button>
                                    </div>
                                </div>}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default BalanceCard