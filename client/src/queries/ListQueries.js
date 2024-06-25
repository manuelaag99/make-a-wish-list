import { gql } from "@apollo/client";

const GET_LIST = gql`
	query getList($id: ID!) {
		list (id: $id) {
			id
			listName
			listDescription
			listPrivacy
		}
	}
`

export { GET_LIST };

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
	query getUserLists {
		listsByCreator (creatorId: "6660935f2e128966078f032c") {
			id
			listName
			listDescription
			listPrivacy
		}
	}
`

export { GET_USER_LISTS };