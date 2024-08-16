import { useQuery } from "@apollo/client";
import PostContainer from "../Components/PostContainer";
import TopBar from "../Components/TopBar";
import { GET_POSTS } from "../queries/PostQueries";

export default function FeedPage ({}) {
    const { data, loading, error } = useQuery(GET_POSTS);


    return (
        <div className='flex md:h-screen h-full w-full justify-center items-start bg-var-1 inter-font pt-24 pb-36'>
            <TopBar />
            {loading && <p className="my-8 mx-auto">Loading...</p>}
            {error && <p className="my-8 mx-auto">Error: {error.message}</p>}
            {!loading && !error && data && <div className='flex flex-col w-full justify-center items-start pt-5'>
                {data && data.posts.map((post, index) => {
                    return <PostContainer key={index} post={post} />
                })}
            </div>}
        </div>
    )
}