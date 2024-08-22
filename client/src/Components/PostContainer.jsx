import { IoMdClose } from "react-icons/io";

export default function PostContainer ({ post, onClose }) {
    if (post) return (
        <div className="flex flex-row w-full justify-center items-center px-2">
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
                <button className="absolute top-2 right-2 text-black hover:text-gray-300 duration-200" onClick={onClose}>
                    <IoMdClose fontSize={18} />
                </button>
            </div>
        </div>
    )
}