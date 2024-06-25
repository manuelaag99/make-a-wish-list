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

const ADD_LIST = gql`
    mutation addList($listName: String!, $listPrivacy: String!, $listDescription: String!) {
        addList(listName: $listName, listPrivacy: $listPrivacy, listDescription: $listDescription) {
            id
            listName
            listPrivacy
            listDescription
        }
    }
`

export { ADD_LIST }

const UPDATE_LIST = gql`
    mutation updateList($id: ID!, $listName: String, $listPrivacy: String, $listDescription: String) {
        updateList(id: $id, listName: $listName, listPrivacy: $listPrivacy, listDescription: $listDescription) {
            id
            listName
            listPrivacy
            listDescription
        }
    }
`

export { UPDATE_LIST }