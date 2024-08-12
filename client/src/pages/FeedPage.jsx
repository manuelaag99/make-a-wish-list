import PostContainer from "../Components/PostContainer";

export default function FeedPage ({}) {
    return (
        <div className='flex md:h-screen h-full w-full justify-center items-start bg-var-1 inter-font pt-24 pb-36'>
            <div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 z-100 '></div>
            <div className='flex flex-col w-full justify-center items-start pt-5'>
                <PostContainer />
                <PostContainer />
            </div>
        </div>
    )
}