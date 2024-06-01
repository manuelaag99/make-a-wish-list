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

export { DELETE_USER }