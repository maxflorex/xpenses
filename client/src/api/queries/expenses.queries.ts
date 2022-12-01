import { gql } from '@apollo/client'

const GET_EXPENSES = gql`
    query getExpenses {
        expenses {
            id
            title
            paidWith
            paidBy
            amount
        }
    }
`

const GET_EXPENSE = gql`
    query getExpense($id: ID!) {
        expense(id: $id) {
            id
            title
            paidWith
            paidBy
            amount
        }
    }
`

export { GET_EXPENSES, GET_EXPENSE }