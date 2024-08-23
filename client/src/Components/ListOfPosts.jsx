import { useQuery } from "@apollo/client";
import PostContainer from "./PostContainer";
import { GET_POSTS } from "../queries/PostQueries";

export default function ListOfPosts ({ posts }) {
    const { loading, error, data } = useQuery(GET_POSTS);

    return (
        <div className="flex flex-col w-full mt-12 mx-auto px-4 sm:px-20">
            <PostContainer />
        </div>
    )
}