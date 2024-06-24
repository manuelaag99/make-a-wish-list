import { gql } from "@apollo/client";

const GET_USERS = gql`
	query getUsers {
		users {
			id
			username
			email
		}
	}
`

export { GET_USERS };

const GET_USER = gql`
	query getUser($id: ID!) {
		user (id: $id) {
			displayName
			email
		}
	}
`

export { GET_USER };