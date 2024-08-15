import PostContainer from "../Components/PostContainer";
import TopBar from "../Components/TopBar";

export default function FeedPage ({}) {
    return (
        <div className='flex md:h-screen h-full w-full justify-center items-start bg-var-1 inter-font pt-24 pb-36'>
            <TopBar />
            <div className='flex flex-col w-full justify-center items-start pt-5'>
                <PostContainer />
                <PostContainer />
            </div>
        </div>
    )
}