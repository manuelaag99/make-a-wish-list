export default function PostContainer ({ post }) {
    return (
        <div className="flex flex-row md:w-5/10 w-95 bg-white rounded-md shadow-2xl p-6 my-5 mx-auto">
            <div className="flex w-1/10 items-start">
                <img src="https://via.placeholder.com/150" alt="profile" className="w-full rounded-full" />
            </div>
            <div className="flex flex-col w-9/10 pl-4 ">
                <div className="font-bold">
                    {post.postTitle}
                </div>
                <div className="text-gray-400 text-date">
                    {post.creationDate}
                </div>
                <div>
                    {post.postBody}
                </div>
            </div>
        </div>
    )
}