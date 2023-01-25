import { gql } from '@apollo/client';

const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $pw: String!) {
        addUser(data: { username: $username, email: $email, pw: $pw }) {
            id
            username
            email
            balance
        }
    }
`;

const NEW_EXPENSE = gql`
    mutation AddExpense(
        $title: String!
        $paidWith: String!
        $paidBy: String!
        $amount: Float!
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
            user {
                username
                email
            }
        }
    }
`;

const USER_LOGIN = gql`
    mutation UserLogin(
        $username: String!
        # $email: String!
        $pw: String!
    ) {
        userLogin(data: { username: $username, pw: $pw }) {
            id
            username
            email
            balance
        }
    }
`;

const DELETE_EXPENSE = gql`
    mutation DeleteExpense($id: ID!) {
        deleteExpense(id: $id) {
            id
            title
            user {
                id
                username
                email
            }
        }
    }
`;

const UPDATE_EXPENSE = gql`
    mutation UpdateExpense(
        $id: ID!
        $title: String!
        $paidWith: String!
        $paidBy: String!
        $amount: Float!
    ) {
        updateExpense(
            id: $id
            data: {
                title: $title
                paidWith: $paidWith
                paidBy: $paidBy
                amount: $amount
            }
        ) {
            id
            title
            paidBy
            paidWith
            amount
        }
    }
`

const UPDATE_USER = gql`
    mutation UpdateUser(
        $id: ID!
        $username: String
        $email: String
        $pw: String
        $balance: Float
    ) {
        updateUser(
            id: $id
            data : {
                username: $username
                email: $email
                pw: $pw
                balance: $balance
                }
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
            balance 
        }
    }
`

const DELETE_ALL_EXPENSES = gql`
    mutation DeleteAllJobs(
        $id: ID!
    ) {
        deleteAllJobs(
            id: $id
        ) {
            id
            username
            email
        }
    }
`

export { ADD_USER, USER_LOGIN, NEW_EXPENSE, DELETE_EXPENSE, UPDATE_EXPENSE, UPDATE_USER, DELETE_USER, DELETE_ALL_EXPENSES };
