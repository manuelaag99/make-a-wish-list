import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/PostQueries";
import PostBox from "./PostBox";
import { useEffect, useState } from "react";

export default function ListOfPosts ({ isSearchResultsPage, posts, searchQuery }) {
    const { loading, error, data } = useQuery(GET_POSTS);
    const [postsToDisplay, setPostsToDisplay] = useState(null);

    useEffect(() => {
        if (isSearchResultsPage && data) {
            setPostsToDisplay(data.posts.filter((post) => post.postTitle.toLowerCase().includes(searchQuery.toLowerCase())));
        }
    }, [searchQuery, data, isSearchResultsPage]);

    if (loading) return <p className="mx-auto my-8 text-var-3">Loading...</p>

    if (error) return <p className="mx-auto my-8 text-var-3">Error: {error.message}</p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full mt-2 mx-auto px-4 sm:px-20">
                {(postsToDisplay && postsToDisplay.length && (postsToDisplay.length > 0)) ? postsToDisplay.map((post, index) => {
                    return <PostBox additionalClassnamesForBox="my-3" isOnProfilePage={false} key={index} post={post} />
                }) : null}

                {(postsToDisplay && (postsToDisplay.length < 1)) ? <div>
                    <p className="mx-auto my-8 text-var-3 text-center">No se encontraron resultados</p>
                </div> : null}
            </div>
        )
    }
}