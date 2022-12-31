import FormEditExpense from '../FormEditExpense'

type Props = {
    setShowEdit: any,
    selected: any
}

const EditFormModal = ({ setShowEdit, selected }: Props) => {

    const exitModal = (e: any) => {
        if (e.target.classList.contains('close')) {
            setShowEdit(false)
        }
    }


    return (
        <div className='modal close' onClick={exitModal}>
            <div className="column">
                <h1>Edit Expense</h1>
                <FormEditExpense selected={selected} setShowEdit={setShowEdit} />
                <div className='btn-close'>
                    <i className="ri-close-fill close" onClick={exitModal}></i>
                </div>
            </div>
        </div>
    )
}

export default EditFormModal