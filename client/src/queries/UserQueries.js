const { gql } = require("@apollo/client");

const GET_USERS = gql`
	query getUsers {
		users {
			id
			username
			email
		}
	}
`