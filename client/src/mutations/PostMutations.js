import { gql } from "@apollo/client";

const DELETE_POST = gql`
    mutation deletePost($id: ID!) {
        deletePost(id: $id) {
            id
            postTitle
        }
    }
`

const ADD_POST = gql`
    mutation addPost($postTitle: String!, $postBody: String!, $creationDate: String!, $creatorId: ID!) {
        addPost(postTitle: $postTitle, postBody: $postBody, creationDate: $creationDate, creatorId: $creatorId) {
            id
            postTitle
            postBody
            creationDate
        }
    }
`

const UPDATE_POST = gql`
    mutation updatePost($id: ID!, $postTitle: String, $postBody: String) {
        updatePost(id: $id, postTitle: $postTitle, postBody: $postBody) {
            id
            postTitle
            postBody
        }
    }
`

export { DELETE_POST, ADD_POST, UPDATE_POST }