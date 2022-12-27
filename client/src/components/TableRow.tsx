interface ItemProps {
    id: string
    title: string
    paidBy: string
    paidWith: string
    amount: string
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
            <td>{props.title}</td>
            <td>{props.paidBy}</td>
            <td>{props.paidWith}</td>
            <td>{props.amount}</td>
            <td>
                <div className="row">
                    <i className="ri-delete-bin-5-line actions" onClick={handleDelete}></i>
                    <i className="ri-edit-2-line actions" onClick={handleEdit}></i>
                </div>
            </td>
        </>
    )
}

export default TableRow