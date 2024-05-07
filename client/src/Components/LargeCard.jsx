import { useState } from "react"
import ListsSection from "./ListsSection"

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

			{contentToDisplay.listsSection && <ListsSection /> }
			{contentToDisplay.postsSection && <div className="flex flex-col w-full">
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
			</div> }
          
        </div>
    )
}