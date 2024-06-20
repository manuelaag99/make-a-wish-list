import { useState } from "react"
import { gql, useQuery } from '@apollo/client';
// import { GET_USERS } from "../queries/UserQueries"

import ListsSection from "./ListsSection"
import PostsSection from "./PostsSection"

const GET_USERS = gql`
	query getUsers {
		users {
			id
			username
			email
		}
	}
`

export default function LargeCard ({ sendIdOfList }) {
	const [contentToDisplay, setContentToDisplay] = useState({ postsSection: false, listsSection: true });

	const { loading, error, data } = useQuery(GET_USERS);
	
	if (loading) return <p>Loading...</p>
	
	if (error) return <p>Error</p>



	function sendId (listId) {
		sendIdOfList(listId);
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
			{contentToDisplay.listsSection && <ListsSection selectList={(listId) => sendId(listId)} /> }
			{contentToDisplay.postsSection && <PostsSection /> }
        </div>
    )
}