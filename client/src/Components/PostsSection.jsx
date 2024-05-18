export default function PostsSection () {
    return (
        <div className="flex flex-col w-full">
			<div className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer'>
				<p className='text-center font-bold overflow-hidden'>
					+ Agregar publicación nueva
				</p>
			</div>

			<div className="flex flex-col w-full p-5">
				<div className="flex w-full py-0.5">
					<p className="text-black font-bold">
						Nombre de usuario
					</p>
				</div>
				<div className="flex w-full py-0.5">
					<p>
						Publicacion
					</p>
				</div>
			</div>
		</div>
    )
}