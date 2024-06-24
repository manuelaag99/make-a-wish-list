import { gql } from "@apollo/client";

const DELETE_LIST = gql`
    mutation deleteList($id: ID!) {
        deleteList(id: $id) {
            id
            listName
        }
    }
`

export { DELETE_LIST }