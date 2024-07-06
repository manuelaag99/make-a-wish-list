import { gql } from "@apollo/client";

const GET_LIST_INFO = gql`
	query getList($id: ID!) {
		list (id: $id) {
			id
			listName
			listDescription
			listPrivacy
			creator {
				displayName
				id
			}
		}
	}
`

export { GET_LIST_INFO };

const GET_LISTS = gql`
	query getLists {
		lists {
			id
			listName
			listDescription
			listPrivacy
		}
	}
`

export { GET_LISTS };

const GET_USER_LISTS = gql`
	query getUserLists($creatorId: ID!) {
		listsByCreator (creatorId: $creatorId) {
			id
			listName
			listDescription
			listPrivacy
		}
	}
`

export { GET_USER_LISTS };