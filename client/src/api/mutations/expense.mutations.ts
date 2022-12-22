import { gql } from "@apollo/client";


const ADD_USER = gql`
    mutation AddUser(
        $username: String!
        $email: String!
        $pw: String!
    ) {
        addUser (
            username: $username
            email: $email
            pw: $pw
        ) {
            id
            username
            email
        }
    }
`

// const UPDATE_USER = gql`
//     mutation UpdateUser(
//         $id: ID!
//         $username: String!
//         $email: String!
//         $balance: Number!
//     ) {
//         updateUser(
//             id: $id
//             data: {
//                 username: $username
//                 email: $email
//                 balance: $balance
//             }
//         ) {
//             id
//             username
//             email
//             balance
//         }
//     }
// `

// const DELETE_USER = gql`
//     mutation DeleteUser(
//          $id: ID!
//     ) {
//         deleteUser(
//             id: $id
//         ) {
//             id 
//             username
//             email
//             amount
//         }
//     }
// `


const ADD_EXPENSE = gql`
    mutation AddExpense(
        $id: ID!
        $title: String!
        $paidWith: String! 
        $paidBy: String! 
        $amount: Number! 
        $userId: String! 
    ) {
        addExpense(
            id: $id
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

// const REMOVE_EXPENSE = gql`
//     mutation DeleteExpense(
//         $id: ID!
//     ) {
//         deleteExpense(
//             id: $id
//         ) {
//             id
//             expenses {
//                 title
//                 amount
//                 paidBy
//                 paidWith
//             }
//         }
//     }
// `

// const UPDATE_EXPENSE = gql`
//     mutation UpdateExpense(
//         $id: ID!
//         $title: String!
//         $paidWith: String! 
//         $paidBy: String! 
//         $amount: Number! 
//         $userId: String! 
//     ) {
//         updateExpense(
//             id: $id
//             data: {
//                 title: $title
//                 paidWith: $paidWith
//                 paidBy: $paidBy
//                 amount: $amount
//                 userId: $userId 
//             } 
//         ) {
//             id
//             title
//             paidWith
//             paidBy
//             amount
//             user {
//                 id
//                 username
//             }
//         }
//     }
// `

const USER_LOGIN = gql`
    mutation UserLogin(
        $username: String!
        # $email: String!
        $pw: String!
    ) {
        userLogin(
            data: {
                username: $username
                # email: $email
                pw: $pw
            }
        ) {
            id
            username
            email
        }
    }
`


export { ADD_USER, ADD_EXPENSE, USER_LOGIN }