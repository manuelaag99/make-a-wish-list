import { gql } from "@apollo/client";

const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $username: String!, $email: String!, $displayName: String!, $password: String!, $profilePhotoUrl: String!) {
        updateUser(id: $id, username: $username, email: $email, displayName: $displayName, password: $password, profilePhotoUrl: $profilePhotoUrl) {
            id
            username
            email
        }
    }
`

export { UPDATE_USER }

const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            id
            username
            email
        }
    }
`

export { DELETE_USER }

