import { useState } from "react"
import { useQuery } from '@apollo/client';
import { GET_USERS } from "../queries/UserQueries"

import ListsSection from "./ListsSection"
import PostsSection from "./PostsSection"
import ListOrPostModal from "./Modals/ListOrPostModal";


export default function LargeCard ({ sendList, userId }) {
	const [contentToDisplay, setContentToDisplay] = useState({ postsSection: false, listsSection: true });
	const [isListOrPostModalVisible, setIsListOrPostModalVisible] = useState(false);
	const [isModalForList, setIsModalForList] = useState(false);
	const [isModalForPost, setIsModalForPost] = useState(false);
	const [contentForModal, setContentForModal] = useState(null);
	
	function openListModal (list) {
		setContentForModal(list);
		setIsModalForPost(false);
		setIsModalForList(true);
		setIsListOrPostModalVisible(true);
	}

	function openPostModal (post) {
		setContentForModal(post);
		setIsModalForList(false);
		setIsModalForPost(true);
		setIsListOrPostModalVisible(true);
	}
	
    return (
        <div className='flex flex-col items-start w-full bg-white h-fit shadow-2xl rounded-md pb-8 '>
			<div className='flex flex-row w-full justify-center'>
				<div className="flex flex-col w-1/2">
					<div onClick={() => setContentToDisplay({ postsSection: false, listsSection: true })} className='flex w-full bg-white hover:bg-gray-300 duration-200 h-fit py-4 justify-center rounded-tl-md cursor-pointer'>
						<p className='text-center concert-font overflow-hidden'>
							Listas
						</p>
					</div>
					{!contentToDisplay.postsSection && <div className='w-full h-0.5 float-right bg-black'></div>}
				</div>
				<div className="flex flex-col w-1/2">
					<div onClick={() => setContentToDisplay({ postsSection: true, listsSection: false })} className='flex w-full bg-white hover:bg-gray-300 duration-200 h-fit py-4 justify-center rounded-tr-md cursor-pointer'>
						<p className='text-center concert-font overflow-hidden'>
							Publicaciones
						</p>
					</div>
					{!contentToDisplay.listsSection && <div className='w-full h-0.5 float-left bg-black'></div>}
				</div>
			</div>
			{contentToDisplay.listsSection && <ListsSection selectList={(list) => openListModal(list)} userId={userId} /> }
			{contentToDisplay.postsSection && <PostsSection selectPost={(post) => openPostModal(post)} userId={userId} /> }

			{isListOrPostModalVisible && <ListOrPostModal content={contentForModal} isListModal={isModalForList} isPostModal={isModalForPost} onClose={() => setIsListOrPostModalVisible(false)} />}
        </div>
    )
}