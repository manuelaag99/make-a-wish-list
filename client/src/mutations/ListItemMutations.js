import { gql  } from "@apollo/client";

const ADD_LIST_ITEM = gql`
    mutation addListItem($listId: ID!, $itemName: String!, $itemDescription: String!, $itemPhotoUrl: String!, $creatorId: ID!) {
        addListItem(listId: $listId, itemName: $itemName, itemDescription: $itemDescription, itemPhotoUrl: $itemPhotoUrl, creatorId: $creatorId) {
            id
            itemName
            itemDescription
            itemPhotoUrl
        }
    }
`

export { ADD_LIST_ITEM };

const DELETE_LIST_ITEM = gql`
    mutation deleteListItem($id: ID!) {
        deleteListItem(id: $id) {
            id
            itemName
        }
    }
`

export { DELETE_LIST_ITEM };

const UPDATE_LIST_ITEM = gql`
    mutation updateListItem($id: ID!, $listId: ID!, $itemName: String!, $itemDescription: String!, $itemPhotoUrl: String!) {
        updateListItem(id: $id, listId: $listId, itemName: $itemName, itemDescription: $itemDescription, itemPhotoUrl: $itemPhotoUrl) {
            id
            itemName
            itemDescription
            itemPhotoUrl
        }
    }
`

export { UPDATE_LIST_ITEM };