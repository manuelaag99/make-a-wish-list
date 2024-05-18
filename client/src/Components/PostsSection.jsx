import PostBox from "./PostBox";

export default function PostsSection () {
    return (
        <div className="flex flex-col w-full">
			<div className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer'>
				<p className='text-center font-bold overflow-hidden'>
					+ Agregar publicación nueva
				</p>
			</div>

			<PostBox postBody="Contenido de la publicacion" userDisplayName="Nombre e usuario" />

		</div>
    )
}