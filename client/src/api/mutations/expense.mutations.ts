import { gql } from "@apollo/client";


const ADD_USER = gql`
    mutation AddUser(
        $username: String!
        $email: String!
        $pw: String!
    ) {
        addUser (
            data: {
                username: $username
                email: $email
                pw: $pw
            }
        ) {
            id
            username
            email
            balance
        }
    }
`


const ADD_EXPENSE = gql`
    mutation AddExpense(
        $title: String!
        $paidWith: String! 
        $paidBy: String! 
        $amount: Number! 
        $userId: ID! 
    ) {
        addExpense(
            data: {
                title: $title
                paidWith: $paidWith
                paidBy: $paidBy
                amount: $amount
                userId: $userId 
            }
        ) {
            id
            title
            paidWith
            paidBy
            amount
            user {
                id
                username
            }
        }
    }
`

const USER_LOGIN = gql`
    mutation UserLogin(
        $username: String!
        # $email: String!
        $pw: String!
    ) {
        userLogin(
            data: {
                username: $username
                pw: $pw
            }
        ) {
            id
            username
            email
            balance
        }
    }
`



export { ADD_USER, ADD_EXPENSE, USER_LOGIN }