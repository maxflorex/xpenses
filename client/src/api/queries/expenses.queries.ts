import { gql } from '@apollo/client'

const GET_USERS = gql`
    query getUsers {
        users {
            id
            username
            email
            balance
        }
    }
`

const GET_EXPENSES = gql`
    query Expenses($userId: ID!) {
        expenses(data: {
            userId: $userId
        }) {
            id
            title
            paidBy
            paidWith
            amount
        }
    }
`

export { GET_USERS, GET_EXPENSES }