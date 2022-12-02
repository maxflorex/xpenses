import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface ItemProps {
    id: string
    title: string
    paidBy: string
    paidWith: string
    amount: string
}

interface ShowModalProps {
    setShowDelete: any
}


const TableRow = (props: (ItemProps & ShowModalProps)) => {

    return (
        <>
            <td>{props.title}</td>
            <td>{props.paidBy}</td>
            <td>{props.paidWith}</td>
            <td>{props.amount}</td>
            <td>
                <div className="row">
                    <i className="ri-delete-bin-5-line actions" onClick={() => props.setShowDelete(true)}></i>
                    <Link to={props.id} className="ri-edit-2-line actions"></Link>
                </div>
            </td>
        </>
    )
}

export default TableRow