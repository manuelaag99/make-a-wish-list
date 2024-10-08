import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddOrUpdateContentModal from "./Modals/AddOrUpdateContentModal";
import { GET_USER_POSTS } from "../queries/PostQueries";
import { DELETE_POST } from "../mutations/PostMutations";
import { useMutation } from "@apollo/client";

export default function PostBox ({ additionalClassnamesForBox, isOnProfilePage, onClickBox, post }) {
	const [deletePostFromDataBase] = useMutation(DELETE_POST, {
		variables: { id: post.id },
		// refetchQueries: [{ query: GET_USER_POSTS }]
		update(cache, { data: { deletePost } }) {
			const { postsByCreator } = cache.readQuery({ query: GET_USER_POSTS });
			const newPostsByCreator = postsByCreator.filter((post) => post.id !== deletePost.id);
			cache.writeQuery({
				query: GET_USER_POSTS,
				data: { postsByCreator: newPostsByCreator }
			});
		}
	})

	function onDeletePost () {
		deletePostFromDataBase();
	}

	const [isAddOrUpdateContentModalVisible, setIsAddOrUpdateContentModalVisible] = useState(false);
	const [postToUpdate, setPostToUpdate] = useState(null);
	function onUpdatePost () {
		setPostToUpdate(post);
		setIsAddOrUpdateContentModalVisible(true);
	}

	function onClickThreeDots () {
		setAreThreeDotsClicked((prev) => (!prev));
	}

	const [areThreeDotsClicked, setAreThreeDotsClicked] = useState(false);

    return (
        <div className={"flex flex-row w-full p-5 bg-white hover:bg-gray-300 cursor-pointer duration-200 relative " + additionalClassnamesForBox} onClick={onClickBox}>
			<div className="flex flex-col w-9/10 justify-center items-center relative ">
				<div className="flex w-full py-0.5">
					<p className="text-black font-bold">
						{post.creator.displayName}
					</p>
				</div>
				<div className="flex w-full py-0.5">
					<p className="text-black font-normal">
						{post.postBody}
					</p>
				</div>
			</div>
			
			{isOnProfilePage && <div className="flex w-1/10 justify-center items-center relative text-black hover:text-white" onClick={onClickThreeDots}>
				<button className="flex w-full justify-center items-center ">
					<BsThreeDotsVertical />
				</button>
			</div>}
			{areThreeDotsClicked && <div className="absolute flex flex-col bg-white w-24 h-fit right-0 top-[60%] shadow-2xl z-20">
				<div className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-400 text-center " onClick={onUpdatePost}>
					Editar
				</div>
				<div className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-400 text-center " onClick={onDeletePost}>
					Borrar
				</div>
			</div>}

			{isAddOrUpdateContentModalVisible && <AddOrUpdateContentModal contentToUpdate={postToUpdate} isAdd={false} typeOfContent="post" onClose={() => setIsAddOrUpdateContentModalVisible(false)} />}
		</div>
    )
}