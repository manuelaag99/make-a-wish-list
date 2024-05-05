export default function ListsSection ({}) {
    return (
        <div className="flex flex-col w-full">
			<div className='flex flex-col w-full rounded-none'>
				<div className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer'>
					<p className='text-center font-bold overflow-hidden'>
						+ Agregar lista nueva
						</p>
				</div>
			</div>

			<div className='flex flex-col w-full'>
				<div className="flex flex-row w-full px-7 cursor-pointer bg-white hover:bg-gray-300">
					<div className="flex flex-col w-9/10 py-4">
						<div>
							<p className="text-left text-black font-bold overflow-hidden">
								Nombre de lista
							</p>
						</div>
						<div>
							<p className="text-left text-black overflow-hidden">
								Descripción de lista
							</p>
						</div>
						<div>
							<p className="text-left text-gray-500 overflow-hidden">
								Privacidad de lista
							</p>
						</div>
					</div>
					<div className="flex w-1/10">

					</div>
					
				</div>
			</div>
		</div>
    )
}