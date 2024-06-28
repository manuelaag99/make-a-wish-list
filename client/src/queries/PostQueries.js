import { gql } from "@apollo/client";

const GET_POST = gql`
    query getPost($id: ID!) {
        post (id: $id) {
            id
            postTitle
            postBody
            creationDate
        }
    }
`

const GET_POSTS = gql`
    query getPosts {
        posts {
            id
            postTitle
            postBody
            creationDate
        }
    }
`

const GET_USER_POSTS = gql`
    query getUserPosts {
        postsByCreator (creatorId: "6660935f2e128966078f032c") {
            id
            postTitle
            postBody
            creationDate
        }
    }
`

export { GET_POST, GET_POSTS, GET_USER_POSTS };