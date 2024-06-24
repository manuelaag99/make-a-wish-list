import { gql } from "@apollo/client";

const GET_LISTS = gql`
	query getUsers {
		lists {
			id
			listName
			listDescription
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
		}
	}
`

export { GET_USER_LISTS };