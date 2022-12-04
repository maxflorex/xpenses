import { gql } from "@apollo/client";



const ADD_EXPENSE = gql`
    mutation AddExpense(
        $title: String!
        # SELECT UNIQUE TYPE CREATED IN SCHEMA 
        $paidWith: PaidIn!
        $paidBy: String!
        $amount: String!
    ) {
        addExpense (
        title: $title
        paidWith: $paidWith
        paidBy: $paidBy
        amount: $amount
        )  {
            title
            paidBy
            paidWith
            amount
        }
    }
`

const UPDATE_EXPENSE = gql`
    mutation UpdateExpense(
        $id: ID!
        $title: String!
        # SELECT UNIQUE TYPE CREATED IN SCHEMA 
        $paidWith: PaidWith!
        $paidBy: String!
        $amount: String!
    ) {
        updateExpense (
            id: $id
            title: $title
            paidWith: $paidWith
            paidBy: $paidBy
            amount: $amount
        ) {
            title
            paidBy
            paidWith
            amount
        }
    }
`

const DELETE_EXPENSE = gql`
    mutation DeleteExpense( $id: ID! ) {
            deleteExpense ( id: $id ) {
                id
        }
     }
`

export { UPDATE_EXPENSE, ADD_EXPENSE, DELETE_EXPENSE }