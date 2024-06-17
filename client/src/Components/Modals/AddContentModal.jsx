import { useState } from "react";
import AddButtonSection from "../AddButtonSection";
import PopUpWindowModal from "./PopUpWindowModal";



export default function AddContentModal ({}) {
    const [typeOfContent, setTypeOfContent] = useState('post')
    const [isPopUpWindowVisible, setIsPopUpWindowVisible] = useState(false);


    return (
        <div>
            <div className="fixed top-0 left-o w-full h-full bg-black opacity-35 z-20"></div>
            <div className="flex flex-col sm:w-6/10 w-95 h-fit sm:px-14 px-3 bg-white absolute top-[25%] left-[2.5%] sm:left-[20%] z-30 rounded-md">
                <div className="flex justify-center items-center w-full sm:mt-8 mt-5 sm:mb-8 mb-2">
                    {(typeOfContent === 'list') && <p className="text-black text-3xl concert-font text-center">Agregar lista</p>}
                    {(typeOfContent === 'element') && <p className="text-black text-3xl concert-font text-center">Agregar elemento</p>}
                    {(typeOfContent === 'post') && <p className="text-black text-3xl concert-font text-center">Agregar publicación</p>}
                </div>

                <div className={"flex w-full my-2 items-center " + (((typeOfContent === 'list') || (typeOfContent === 'element')) && " sm:flex-row" ) + (!((typeOfContent === 'list') || (typeOfContent === 'element')) && " sm:flex-col" )}>
                    {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Nombre de la lista: </p>}
                    {(typeOfContent === 'element') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Nombre del elemento: </p>}
                    {(typeOfContent === 'post') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-2 ">Título de publicación: </p>}
                    <input className="bg-gray-300 px-2 py-1 w-full" type="text" placeholder="Título" />
                </div>

                <div className={"flex w-full my-2 items-center " + (((typeOfContent === 'list') || (typeOfContent === 'element')) && " sm:flex-row" ) + (!((typeOfContent === 'list') || (typeOfContent === 'element')) && " sm:flex-col" )}>
                    {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Descripcion de la lista: </p>}
                    {(typeOfContent === 'element') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Descripcion del elemento: </p>}
                    {(typeOfContent === 'post') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-2 ">Contenido: </p>}
                    {((typeOfContent === 'list') || (typeOfContent === 'element')) && <input className="bg-gray-300 px-2 py-1 w-full" type="text" placeholder="Título" />}
                    {(typeOfContent === 'post') && <textarea className="bg-gray-300 px-2 py-1 w-full" type="text" placeholder="Título" />}
                </div>

                {((typeOfContent === 'list') || (typeOfContent === 'element')) && <div className="flex flex-col sm:flex-row sm:w-full my-2 items-center py-1">
                    <div className="">
                        {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Privacidad de la lista: </p>}
                        {(typeOfContent === 'element') && <p className="text-black mr-2 w-fit sm:whitespace-nowrap mb-2 sm:mb-0 ">Enlace de foto del elemento: </p>}
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <input className="mx-2" name="privacy" id="public" type="radio" placeholder="Título" />
                            <label htmlFor="private" >Publico</label>
                        </div>
                        <div>
                            <input className="mx-2" name="privacy" id="private" type="radio" placeholder="Título" />
                            <label htmlFor="private" >Privado</label>
                        </div>
                    </div>
                </div>}

                <AddButtonSection additionalClassNames=" sm:my-10 my-3" hasDisplayMenu={false} />
            </div>
            {isPopUpWindowVisible && <PopUpWindowModal typeOfContent={typeOfContent} />}
        </div>
    )
}