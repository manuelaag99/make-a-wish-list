import { useState } from "react"

export default function AddButtonSection ({}) {
    const [isButtonClicked, setIsButtonClicked] = useState(false);


    return (
        <div classname="flex absolute" >
            <div className='flex justify-center w-full bg-var-2 hover:bg-var-2-hovered h-fit py-3 cursor-pointer rounded-md shadow-2xl mt-5' onClick={(prevValue) => setIsButtonClicked(prevValue => !prevValue)}>
                <p className='text-center text-white concert-font overflow-hidden'>
                    Agregar
                </p>
            </div>

            {isButtonClicked && <div classname="flex flex-col relative">
                <div className='flex justify-center w-full bg-white hover:bg-gray-300 duration-200 h-fit py-3 cursor-pointer shadow-2xl'>
                    <p className='text-center text-black concert-font overflow-hidden'>
                        Agregar lista
                    </p>
                </div>
                <div className='flex justify-center w-full bg-white hover:bg-gray-300 duration-200 h-fit py-3 cursor-pointer shadow-2xl'>
                    <p className='text-center text-black concert-font overflow-hidden'>
                        Agregar elemento a lista
                    </p>
                </div>
                <div className='flex justify-center w-full bg-white hover:bg-gray-300 duration-200 h-fit py-3 cursor-pointer shadow-2xl'>
                    <p className='text-center text-black concert-font overflow-hidden'>
                        Agregar publicación
                    </p>
                </div>
            </div>}
        </div>
    )
}