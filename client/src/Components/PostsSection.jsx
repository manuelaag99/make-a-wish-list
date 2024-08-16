import PostBox from "./PostBox";
import { GET_USER_POSTS } from "../queries/PostQueries";
import { useQuery } from "@apollo/client";
import AddOrUpdateContentModal from "./Modals/AddOrUpdateContentModal";
import { useState } from "react";

export default function PostsSection ({ userId }) {
	const { loading, error, data } = useQuery(GET_USER_POSTS, {
		variables: { creatorId: userId }
	});
	const [isAddOrUpdateContentModalVisible, setIsAddOrUpdateContentModalVisible] = useState(false);

	return (
		<div className="flex flex-col w-full">
			{(error) && <p className="flex flex-col justify-center items-center my-4 mx-auto">Error</p>}

			{(!error && !data && loading) && <p className="flex flex-col justify-center items-center my-5 mx-auto">Cargando...</p>}

			{(!error && !loading && data && data.postsByCreator.length) && <button className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer' onClick={() => setIsAddOrUpdateContentModalVisible(true)}>
					<p className='text-center font-bold overflow-hidden'>
						+ Agregar publicación nueva
					</p>
			</button>}

			{data && (data.postsByCreator) && (data.postsByCreator.length > 0) && data.postsByCreator.map((post, index) => {
				return <PostBox key={index} post={post} postBody="Contenido de la publicacion" userDisplayName="Nombre e usuario" />
			})}

			{isAddOrUpdateContentModalVisible && <AddOrUpdateContentModal isAdd={true} contentToUpdate={null} typeOfContent="post" onClose={() => setIsAddOrUpdateContentModalVisible(false)} userId={userId} />}
		</div>
	)
}