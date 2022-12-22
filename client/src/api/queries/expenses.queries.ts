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

const GET_USER = gql`
    query getUser($id: ID!) {
        expense(id: $id) {
            user(id: $id) {
                id
                username
                email
                balance
            }
        }
    }
`

export { GET_USERS, GET_USER }