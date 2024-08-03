import { gql } from "@apollo/client";

const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            id
            username
            email
        }
    }
`

const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $username: String!, $email: String!, $displayName: String!, $password: String!) {
        updateUser(id: $id, username: $username, email: $email, $displayName: $displayName, password: $password) {
            id
            username
            email
        }
    }
`

export { UPDATE_USER, DELETE_USER }