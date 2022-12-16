import { gql } from "@apollo/client";


const ADD_USER = gql`
    mutation AddUser(
        $username: String!
        $email: String!
    ) {
        addUser (
            username: $username
            email: $email
        ) {
            id
            username
            email
        }
    }
`

const UPDATE_USER = gql`
    mutation UpdateUser(
        $id: ID!
        $username: String!
        $email: String!
        $balance: Number!
    ) {
        updateUser(
            id: $id
            username: $username
            email: $email
            balance: $balance
        ) {
            id
            username
            email
            balance
        }
    }
`

const DELETE_USER = gql`
    mutation DeleteUser(
         $id: ID!
    ) {
        deleteUser(
            id: $id
        ) {
            id
            username
            email
            amount
        }
    }
`


const ADD_EXPENSE = gql`
    mutation AddExpense(
        $id: ID!
        $expenses: Expenses!
    ) {
        addExpense(
            id: $id
            expenses: $expenses
        ) {
            id
            expenses {
                title
                amount
                paidBy
                paidWith
            }
        }
    }
`

const REMOVE_EXPENSE = gql`
    mutation(
        $id: ID!
        $expenses: Expenses!
    ) {
        removeExpense(
            id: $id
            expenses: $expenses
        ) {
            id
            expenses {
                title
                amount
                paidBy
                paidWith
            }
        }
    }
`


export { ADD_USER, UPDATE_USER, DELETE_USER, ADD_EXPENSE, REMOVE_EXPENSE }