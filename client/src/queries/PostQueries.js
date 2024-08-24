import { gql } from "@apollo/client";

const GET_POST = gql`
    query getPost($id: ID!) {
        post (id: $id) {
            id
            postTitle
            postBody
            creationDate
            creator {
                displayName
                id
            }
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
            creator {
                displayName
                id
            }
        }
    }
`

const GET_USER_POSTS = gql`
    query getUserPosts($creatorId: ID!) {
        postsByCreator (creatorId: $creatorId) {
            id
            postTitle
            postBody
            creationDate
            creator {
                displayName
                id
            }
        }
    }
`

export { GET_POST, GET_POSTS, GET_USER_POSTS };