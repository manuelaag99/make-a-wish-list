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
			id
			displayName
			email
			username
			password
			profilePhotoUrl
		}
	}
`

export { GET_USER };