import { useState } from "react"

export default function AddButtonSection ({ additionalClassNames, clickButtonFunction, hasDisplayMenu, onAddList, onAddListElement, onAddPost }) {
    const [isDisplayMenuVisible, setIsDisplayMenuVisible] = useState(false);

    function buttonFunction () {
        if (hasDisplayMenu) {
            setIsDisplayMenuVisible((prevValue) => !prevValue);
        } else {
            clickButtonFunction();
        }
        
    }

    return (
        <div classname={"block relative h-22 "}>
            <div className={'flex justify-center w-full bg-var-2 hover:bg-var-2-hovered h-fit py-3 cursor-pointer rounded-md shadow-2xl ' + additionalClassNames} onClick={buttonFunction}>
                <p className='text-center text-white concert-font overflow-hidden'>
                    Agregar
                </p>
            </div>

            {hasDisplayMenu && isDisplayMenuVisible && <div classname="flex flex-col absplute top-0 bg-white ">
                <div onClick={onAddList} className='flex justify-center w-full bg-white hover:bg-gray-300 duration-200 h-fit py-3 cursor-pointer hover:shadow-2xl'>
                    <p className='text-center text-black concert-font overflow-hidden'>
                        Agregar lista
                    </p>
                </div>
                <div onClick={onAddListElement} className='flex justify-center w-full bg-white hover:bg-gray-300 duration-200 h-fit py-3 cursor-pointer hover:shadow-2xl'>
                    <p className='text-center text-black concert-font overflow-hidden'>
                        Agregar elemento a lista
                    </p>
                </div>
                <div onClick={onAddPost} className='flex justify-center w-full bg-white hover:bg-gray-300 duration-200 h-fit py-3 cursor-pointer hover: shadow-2xl'>
                    <p className='text-center text-black concert-font overflow-hidden'>
                        Agregar publicación
                    </p>
                </div>
            </div>}            
        </div>
    )
}