import React from 'react'

type Props = {
    data: any
}

const Table = ({ data }: Props) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>By</th>
                    <th>Paid With</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {data.expenses.map((item: any, i: number) => (
                    <tr key={i}>
                        <td>{item.title}</td>
                        <td>{item.paidBy}</td>
                        <td>{item.paidWith}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table