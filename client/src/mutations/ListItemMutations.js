import { gql  } from "@apollo/client";

const { ADD_LIST_ITEM } = gql`
    mutation addListItem ($listId: ID!, $itemName: String!, $itemDescription: String!, $itemPhotoUrl: String) {
        addListItem (listId: $listId, itemName: $itemName, itemDescription: $itemDescription, itemPhotoUrl: $itemPhotoUrl) {
            id
            itemName
            itemDescription
            itemPhotoUrl
        }
    }
`;

export { ADD_LIST_ITEM };

