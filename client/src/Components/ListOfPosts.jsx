import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/PostQueries";
import PostBox from "./PostBox";

export default function ListOfPosts ({ posts }) {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p className="mx-auto my-8 text-var-3">Loading...</p>

    if (error) return <p className="mx-auto my-8 text-var-3">Error: {error.message}</p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full mt-2 mx-auto px-4 sm:px-20">
                {data && data.posts && data.posts.length && (data.posts.length > 0) && data.posts.map((post, index) => {
                    return <PostBox additionalClassnamesForBox="my-3" isOnProfilePage={false} key={index} post={post} />
                } )}
            </div>
        )
    }
}