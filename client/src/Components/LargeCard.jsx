import { useState } from "react"

export default function LargeCard ({}) {

	const [contentToDisplay, setContentToDisplay] = useState({ postsSection: false, listsSection: true })
    return (
        <div className='flex flex-col items-start w-full bg-white h-fit shadow-2xl rounded-md pb-8 '>
			<div className='flex flex-row w-full justify-center'>
				<div className="flex flex-col w-1/2">
					<div onClick={() => setContentToDisplay({ postsSection: true, listsSection: false })} className='flex w-full bg-white hover:bg-gray-300 duration-200 h-fit py-4 justify-center rounded-tl-md cursor-pointer'>
						<p className='text-center font-bold concert-font overflow-hidden'>
							Publicaciones
						</p>
					</div>
					{!contentToDisplay.listsSection && <div className='w-full h-0.5 float-left bg-black'></div>}
				</div>
				<div className="flex flex-col w-1/2">
					<div onClick={() => setContentToDisplay({ postsSection: false, listsSection: true })} className='flex w-full bg-white hover:bg-gray-300 duration-200 h-fit py-4 justify-center rounded-tr-md cursor-pointer'>
						<p className='text-center font-bold concert-font overflow-hidden'>
							Listas
						</p>
					</div>
					{!contentToDisplay.postsSection && <div className='w-full h-0.5 float-right bg-black'></div>}
				</div>
			</div>

			{contentToDisplay.listsSection && <div className="flex flex-col w-full">
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
			</div>}
          
        </div>
    )
}