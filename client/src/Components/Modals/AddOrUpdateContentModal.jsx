import { useEffect, useState } from "react";
import AddButtonSection from "../AddButtonSection";
import PopUpWindowModal from "./PopUpWindowModal";
import ActionButton from "../ActionButton";
import { IoMdClose } from "react-icons/io";



export default function AddOrUpdateContentModal ({ isAdd, onClose, typeOfContent }) {
    const [isPopUpWindowVisible, setIsPopUpWindowVisible] = useState(false);

    function addButtonFunction () {
        setIsPopUpWindowVisible(true);
    }

    function popUpWindowButtonFunction () {
        onClose();
    }

    const [formState, setFormState] = useState({});
    const [isButtonInactive, setIsButtonInactive] = useState(false);
    function inputChangeHandler (e) {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }

    function checkFormValidity () {
        if ((typeOfContent === 'list') || (typeOfContent === 'element')) {
            if (formState.title && formState.description && formState.privacy) {
                setIsButtonInactive(false);
            } else {
                setIsButtonInactive(true);
            }
        }
    }

    useEffect(() => {
        checkFormValidity();
    }, [formState, typeOfContent])

    return (
        <div>
            <div className="flex fixed top-0 left-0 w-full h-full bg-black opacity-35 z-20" onClick={onClose}></div>
            <div className="flex flex-col sm:w-6/10 w-95 h-fit sm:px-14 px-6 bg-white absolute top-[25%] left-[2.5%] sm:left-[20%] z-30 rounded-md">
                <button className="absolute top-2 right-2 text-black hover:text-gray-300 duration-200" onClick={onClose}>
                    <IoMdClose fontSize={18} />
                </button>
                <div className="flex justify-center items-center w-full sm:mt-8 mt-5 sm:mb-8 mb-2">
                    {(isAdd) && (typeOfContent === 'list') && <p className="text-black text-3xl concert-font text-center">Agregar lista</p>}
                    {(!isAdd) && (typeOfContent === 'list') && <p className="text-black text-3xl concert-font text-center">Modificar lista</p>}
                    {(isAdd) && (typeOfContent === 'element') && <p className="text-black text-3xl concert-font text-center">Agregar elemento</p>}
                    {(!isAdd) && (typeOfContent === 'element') && <p className="text-black text-3xl concert-font text-center">Modificar elemento</p>}
                    {(isAdd) && (typeOfContent === 'post') && <p className="text-black text-3xl concert-font text-center">Agregar publicación</p>}
                    {(!isAdd) && (typeOfContent === 'post') && <p className="text-black text-3xl concert-font text-center">Modificar publicación</p>}
                </div>

                <div className={"flex flex-col w-full my-2 items-center " + (typeOfContent === "post" ? " sm:flex-col" : " sm:flex-row" )}>
                    {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Nombre de la lista: </p>}
                    {(typeOfContent === 'element') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Nombre del elemento: </p>}
                    {(typeOfContent === 'post') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-2 ">Título de publicación: </p>}
                    <input className="bg-gray-300 px-2 py-1 w-full" type="text" name="title" placeholder="Título" onChange={(e) => inputChangeHandler(e)}  />
                </div>

                <div className={"flex flex-col w-full my-2 items-center " + (typeOfContent === "post" ? " sm:flex-col" : " sm:flex-row" )}>
                    {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Descripcion de la lista: </p>}
                    {(typeOfContent === 'element') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Descripcion del elemento: </p>}
                    {(typeOfContent === 'post') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-2 ">Contenido: </p>}
                    {((typeOfContent === 'list') || (typeOfContent === 'element')) && <input className="bg-gray-300 px-2 py-1 w-full" type="text" name="description" placeholder="Título" onChange={(e) => inputChangeHandler(e)} />}
                    {(typeOfContent === 'post') && <textarea className="bg-gray-300 px-2 py-1 w-full" type="text" name="content" placeholder="Título" onChange={(e) => inputChangeHandler(e)} value={formState.content} />}
                </div>

                {((typeOfContent === 'list') || (typeOfContent === 'element')) && <div className="flex flex-col sm:flex-row sm:w-full my-2 items-start py-1">
                    <div className="">
                        {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Privacidad de la lista: </p>}
                        {(typeOfContent === 'element') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Enlace de foto del elemento: </p>}
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <input className="mx-2" name="privacy" id="public" type="radio" placeholder="Título" value="public" onChange={(e) => inputChangeHandler(e)} />
                            <label htmlFor="private" >Publico</label>
                        </div>
                        <div>
                            <input className="mx-2" name="privacy" id="private" type="radio" placeholder="Título" value="private" onChange={(e) => inputChangeHandler(e)} />
                            <label htmlFor="private" >Privado</label>
                        </div>
                    </div>
                </div>}

                <ActionButton additionalClassNames=" md:mt-8 md:mb-10 my-6" isButtondDisabled={isButtonInactive} onClickButtonFunction={addButtonFunction} />
            </div>
            {isPopUpWindowVisible && <PopUpWindowModal onButtonClick={popUpWindowButtonFunction} typeOfContent={typeOfContent} />}
        </div>
    )
}