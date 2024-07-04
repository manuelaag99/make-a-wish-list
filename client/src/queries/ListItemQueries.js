import { gql } from "@apollo/client";

const GET_LIST_ITEM = gql`
    query getListItem($listItemId: ID!) {
        listItem (listItemId: $listItemId) {
            id
            itemName
            itemDescription
            photoUrl
        }
    }
`

export { GET_LIST_ITEM };

const GET_LIST_ITEMS = gql`
    query getListItems {
        listItems {
            id
            itemName
            itemDescription
            photoUrl
        }
    }
`

export { GET_LIST_ITEMS };

const GET_USER_LIST_ITEMS = gql`
    query getUserListItems($creatorId: ID!) {
        listItemsByCreator (creatorId: $creatorId) {
            id
            itemName
            itemDescription
            photoUrl
        }
    }
`

export { GET_USER_LIST_ITEMS };

const GET_LIST_ITEMS_BY_LIST = gql`
    query getListItemsByList($listId: ID!) {
        listItemsByList (listId: $listId) {
            id
            itemName
            itemDescription
            photoUrl
        }
    }
`

export { GET_LIST_ITEMS_BY_LIST };