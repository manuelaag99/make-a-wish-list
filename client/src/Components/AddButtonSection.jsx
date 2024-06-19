import { useState } from "react"

export default function AddButtonSection ({ additionalClassNames, clickButtonFunction, hasDisplayMenu, isButtonActive, onAddList, onAddListElement, onAddPost }) {
    const [isDisplayMenuVisible, setIsDisplayMenuVisible] = useState(false);

    function buttonFunction () {
        if (hasDisplayMenu) {
            setIsDisplayMenuVisible((prevValue) => !prevValue);
        } else {
            clickButtonFunction();
        }
        
    }

    return (
        <div className={"block relative h-22 "}>
            {hasDisplayMenu && isDisplayMenuVisible && <div className="flex flex-col w-full absolute -top-28 bg-white shadow-2xl ">
                <div onClick={onAddList} className='flex justify-center w-full bg-white hover:bg-gray-300 duration-200 h-18 py-3 cursor-pointer hover:shadow-2xl'>
                    <p className='text-center text-black concert-font overflow-hidden'>
                        Agregar lista
                    </p>
                </div>
                <div onClick={onAddListElement} className='flex justify-center w-full bg-white hover:bg-gray-300 duration-200 h-18 py-3 cursor-pointer hover:shadow-2xl'>
                    <p className='text-center text-black concert-font overflow-hidden'>
                        Agregar elemento a lista
                    </p>
                </div>
                <div onClick={onAddPost} className='flex justify-center w-full bg-white hover:bg-gray-300 duration-200 h-18 py-3 cursor-pointer hover: shadow-2xl'>
                    <p className='text-center text-black concert-font overflow-hidden'>
                        Agregar publicación
                    </p>
                </div>
            </div>}

            <button disabled={isButtonActive} className={'flex justify-center w-full disabled:bg-var-2-disabled  bg-var-2 hover:bg-var-2-hovered h-18 py-3 cursor-pointer rounded-md shadow-2xl ' + additionalClassNames} onClick={buttonFunction}>
                <p className='text-center text-white concert-font overflow-hidden'>
                    Agregar
                </p>
            </button>

                    
        </div>
    )
}