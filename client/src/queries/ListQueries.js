const { gql } = require("@apollo/client");

const GET_LISTS = gql`
	query getUsers {
		lists {
			id
			listName
			listDescription
		}
	}
`