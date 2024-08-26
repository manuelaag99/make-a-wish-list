import { gql } from "@apollo/client";

const GET_USERS = gql`
	query getUsers {
		users {
			id
			username
			email
			displayName
			shortBio
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
			shortBio
		}
	}
`

export { GET_USER };