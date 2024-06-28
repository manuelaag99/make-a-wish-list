import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddOrUpdateContentModal from "./Modals/AddOrUpdateContentModal";

export default function PostBox ({ post, postBody, userDisplayName }) {

	function onClickThreeDots () {
		setAreThreeDotsClicked((prev) => (!prev));
	}

	const [areThreeDotsClicked, setAreThreeDotsClicked] = useState(false);

	const [isAddOrUpdateContentModalVisible, setIsAddOrUpdateContentModalVisible] = useState(false);
	const [postToUpdate, setPostToUpdate] = useState(null);
	function onUpdatePost () {
		setPostToUpdate(post);
		setIsAddOrUpdateContentModalVisible(true);
	}

    return (
        <div className="flex flex-row w-full p-5 bg-white hover:bg-gray-300 cursor-pointer duration-200 relative ">
			<div className="flex flex-col w-9/10 justify-center items-center relative ">
				<div className="flex w-full py-0.5">
					<p className="text-black font-bold">
						{userDisplayName}
					</p>
				</div>
				<div className="flex w-full py-0.5">
					<p className="text-black font-normal">
						{post.postBody}
					</p>
				</div>
			</div>
			
			<div className="flex w-1/10 justify-center items-center relative text-black hover:text-white" onClick={onClickThreeDots}>
				<button className="flex w-full justify-center items-center ">
					<BsThreeDotsVertical />
				</button>
			</div>
			{areThreeDotsClicked && <div className="absolute flex flex-col bg-white w-24 h-fit right-0 top-[60%] shadow-2xl z-20">
				<div className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-300 text-center " onClick={onUpdatePost}>
					Editar
				</div>
				<div className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-300 text-center ">
					Borrar
				</div>
			</div>}

			{isAddOrUpdateContentModalVisible && <AddOrUpdateContentModal contentToUpdate={postToUpdate} isAdd={false} typeOfContent="post" onClose={() => setIsAddOrUpdateContentModalVisible(false)} />}
		</div>
    )
}