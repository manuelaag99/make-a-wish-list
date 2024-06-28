import PostBox from "./PostBox";
import { GET_USER_POSTS } from "../queries/PostQueries";
import { useQuery } from "@apollo/client";

export default function PostsSection () {
	const { loading, error, data } = useQuery(GET_USER_POSTS);

	if (error) return <p>Error</p>

	if (!error && loading) return <p>Loading...</p>

	if (!error && !loading && data && data.postsByCreator.length) {
		return (
			<div className="flex flex-col w-full">
				<div className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer'>
					<p className='text-center font-bold overflow-hidden'>
						+ Agregar publicación nueva
					</p>
				</div>
	
				{data && (data.postsByCreator) && (data.postsByCreator.length > 0) && data.postsByCreator.map((post, index) => {
					return <PostBox key={index} post={post} postBody="Contenido de la publicacion" userDisplayName="Nombre e usuario" />
				})}
	
			</div>
		)
	}
}