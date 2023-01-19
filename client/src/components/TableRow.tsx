interface ItemProps {
    id: string
    title: string
    paidBy: string
    paidWith: string
    amount: string,
    index: number
}

interface ShowModalProps {
    setShowDelete: any
    setShowEdit: any
    setSelected: any
}


const TableRow = (props: (ItemProps & ShowModalProps)) => {

    const handleEdit = () => {
        props.setShowEdit(true)
        props.setSelected(props)
    }

    const handleDelete = () => {
        props.setShowDelete(true)
        props.setSelected(props)
    }

    return (
        <>
            <td data-label='#'>{props.index + 1}</td>
            <td data-label='Expense'>{props.title}</td>
            <td data-label='By'>{props.paidBy}</td>
            <td data-label='Paid With'>{props.paidWith}</td>
            <td data-label='Amount'>{props.amount}</td>
            <td data-label='Actions'>
                <div className="row-td">
                    <i className="ri-delete-bin-5-line actions" onClick={handleDelete}></i>
                    <i className="ri-edit-2-line actions" onClick={handleEdit}></i>
                </div>
            </td>
        </>
    )
}

export default TableRow