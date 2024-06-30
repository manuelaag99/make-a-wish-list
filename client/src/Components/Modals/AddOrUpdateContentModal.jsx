import { useEffect, useState } from "react";
import PopUpWindowModal from "./PopUpWindowModal";
import ActionButton from "../ActionButton";
import { IoMdClose } from "react-icons/io";
import { useMutation } from "@apollo/client";
import { ADD_LIST } from "../../mutations/ListMutations";
import { GET_LISTS } from "../../queries/ListQueries";
import { ADD_POST } from "../../mutations/PostMutations";
import { GET_POSTS } from "../../queries/PostQueries";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function AddOrUpdateContentModal ({ contentToUpdate, isAdd, onClose, typeOfContent, userId }) {
    let newCreationDate = new Date().toISOString();
    const [isPopUpWindowVisible, setIsPopUpWindowVisible] = useState(false);

    function addButtonFunction () {
        console.log(formState.title, formState.body, userId)
        if (typeOfContent === 'list') {
            addList(formState.title, formState.privacy, formState.description, userId);
        } else if (typeOfContent === 'post') {
            addPost(formState.title, formState.body, userId, newCreationDate);
        } else if (typeOfContent === 'element') {
            console.log("Element added")
        }
        // setIsPopUpWindowVisible(true);
    }

    function popUpWindowButtonFunction () {
        onClose();
    }

    const [formState, setFormState] = useState({});
    useEffect(() => {
        if (typeOfContent === 'list') {
            setFormState({ title: contentToUpdate ? contentToUpdate.listName : null, description: contentToUpdate ? contentToUpdate.listDescription : null, privacy: contentToUpdate ? contentToUpdate.listPrivacy : null });
        } else if (typeOfContent === 'post') {
            setFormState({ title: contentToUpdate ? contentToUpdate.postTitle : null, body: contentToUpdate ? contentToUpdate.postBody : null });
        } else if (typeOfContent === 'element') {
            setFormState({ title: contentToUpdate ? contentToUpdate.itemName : null, description: contentToUpdate ? contentToUpdate.itemDescription : null, photoUrl: contentToUpdate ? contentToUpdate.photoUrl : null });
        }
    }, [contentToUpdate, typeOfContent])

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
        } else {
            if (formState.title && formState.body) {
                setIsButtonInactive(false);
            } else {
                setIsButtonInactive(true);
            }
        }
    }

    useEffect(() => {
        checkFormValidity();
    }, [formState, typeOfContent])

    const [addList] = useMutation(ADD_LIST, {
        variables: { listName: formState.title, listPrivacy: formState.privacy, listDescription: formState.description, creatorId: userId },
        update(cache, { data: { addList }}) {
            const { lists } = cache.readQuery({ query: GET_LISTS });

            cache.writeQuery({
                query: GET_LISTS,
                data: { lists: lists.concat([addList]) }
            })
        }
    })

    const [addPost] = useMutation(ADD_POST, {
        variables: { postTitle: formState.title, postBody: formState.body, creatorId: userId, creationDate: newCreationDate },
        update(cache, { data: { addPost }}) {
            const { posts } = cache.readQuery({ query: GET_POSTS });

            cache.writeQuery({
                query: GET_POSTS,
                data: { posts: posts.concat([addPost]) }
            })
        }
    })

    return (
        <div>
            <div className="flex fixed top-0 left-0 w-full h-full bg-black opacity-35 z-20" onClick={onClose}></div>
            <div className="flex flex-col md:w-6/10 w-95 h-fit md:px-14 px-6 bg-white fixed top-[15%] left-[2.5%] md:left-[20%] z-30 rounded-md">
                <button className="absolute top-2 right-2 text-black hover:text-gray-300 duration-200" onClick={onClose}>
                    <IoMdClose fontSize={18} />
                </button>
                <div className="flex justify-center items-center w-full md:mt-8 mt-5 md:mb-8 mb-2">
                    {(isAdd) && (typeOfContent === 'list') && <p className="text-black text-3xl concert-font text-center">Agregar lista</p>}
                    {(!isAdd) && (typeOfContent === 'list') && <p className="text-black text-3xl concert-font text-center">Modificar lista</p>}
                    {(isAdd) && (typeOfContent === 'element') && <p className="text-black text-3xl concert-font text-center">Agregar elemento</p>}
                    {(!isAdd) && (typeOfContent === 'element') && <p className="text-black text-3xl concert-font text-center">Modificar elemento</p>}
                    {(isAdd) && (typeOfContent === 'post') && <p className="text-black text-3xl concert-font text-center">Agregar publicación</p>}
                    {(!isAdd) && (typeOfContent === 'post') && <p className="text-black text-3xl concert-font text-center">Modificar publicación</p>}
                </div>

                <div className={"flex flex-col w-full my-2 items-center " + (typeOfContent === "post" ? " md:flex-col" : " md:flex-row" )}>
                    {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Nombre de la lista: </p>}
                    {(typeOfContent === 'element') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Nombre del elemento: </p>}
                    {(typeOfContent === 'post') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-2 ">Título de publicación: </p>}
                    <input className="bg-gray-300 px-2 py-1 w-full" type="text" name="title" placeholder="Título" onChange={(e) => inputChangeHandler(e)} value={formState.title} />
                </div>

                <div className={"flex flex-col w-full my-2 items-center " + (typeOfContent === "post" ? " md:flex-col" : " md:flex-row" )}>
                    {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Descripcion de la lista: </p>}
                    {(typeOfContent === 'element') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Descripcion del elemento: </p>}
                    {(typeOfContent === 'post') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-2 ">Contenido: </p>}
                    {((typeOfContent === 'list') || (typeOfContent === 'element')) && <input className="bg-gray-300 px-2 py-1 w-full" type="text" name="description" placeholder="Título" onChange={(e) => inputChangeHandler(e)} value={formState.description} />}
                    {(typeOfContent === 'post') && <textarea className="bg-gray-300 px-2 py-1 w-full" type="text" name="body" placeholder="Título" onChange={(e) => inputChangeHandler(e)}  value={formState.body} />}
                </div>

                {((typeOfContent === 'list') || (typeOfContent === 'element')) && <div className="flex flex-col md:flex-row md:w-full my-2 items-center py-1">
                    <div className="">
                        {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Privacidad de la lista: </p>}
                        {(typeOfContent === 'element') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Enlace de foto del elemento: </p>}
                    </div>
                    {(typeOfContent === 'list') && <div className="flex flex-col md:flex-row">
                        <div>
                            <input className="md:ml-3 mr-1" defaultChecked={(contentToUpdate && (contentToUpdate.listPrivacy === "public")) ? true : false } name="privacy" id="public" type="radio" placeholder="Título" value="public" onChange={(e) => inputChangeHandler(e)} />
                            <label htmlFor="private" >Publico</label>
                        </div>
                        <div>
                            <input className="md:ml-3 mr-1" defaultChecked={(contentToUpdate && (contentToUpdate.listPrivacy === "private")) ? true : false } name="privacy" id="private" type="radio" placeholder="Título" value="private" onChange={(e) => inputChangeHandler(e)} />
                            <label htmlFor="private" >Privado</label>
                        </div>
                    </div>}
                    {(typeOfContent === 'element') && <input className="bg-gray-300 px-2 py-1 w-full" type="text" name="photoUrl" placeholder="Enlace" onChange={(e) => inputChangeHandler(e)}  />}

                </div>}

                {(typeOfContent === 'list') && <div className="flex flex-col w-full justify-start overflow-auto h-28 mt-3">
                    
                    <div className="flex flex-row w-full bg-white hover:bg-gray-300 duration-200 cursor-pointer py-1 px-1">
                        <div className="flex w-2/10 px-2 py-1 ">
                            <img src="" />
                        </div>
                        <div className="flex flex-col w-6/10 text-black text-left ">
                            <div className="flex w-full font-bold">
                                Nombre de elemento
                            </div>
                            <div className="flex w-full font-normal">
                                Descripcion de elemento
                            </div>
                        </div>
                        <button className="flex w-1/10 justify-center items-center text-black hover:text-white duration-200">
                            <MdEdit fontSize={20} />
                        </button>
                        <button className="flex w-1/10 justify-center items-center text-black hover:text-white duration-200">
                            <MdDelete fontSize={20} />
                        </button>
                    </div>

                    <div className="flex flex-row w-full bg-white hover:bg-gray-300 duration-200 cursor-pointer py-1 px-1">
                        <div className="flex w-2/10 ">
                            
                        </div>
                        <div className="flex flex-col w-6/10 text-black text-left ">
                            <div className="flex w-full font-bold">
                                Nombre de elemento
                            </div>
                            <div className="flex w-full font-normal">
                                Descripcion de elemento
                            </div>
                        </div>
                        <button className="flex w-1/10 justify-center items-center text-black hover:text-white duration-200">
                            <MdEdit fontSize={20} />
                        </button>
                        <button className="flex w-1/10 justify-center items-center text-black hover:text-white duration-200">
                            <MdDelete fontSize={20} />
                        </button>
                    </div>

                    <div className="flex flex-row w-full bg-white hover:bg-gray-300 duration-200 cursor-pointer py-1 px-1">
                        <div className="flex w-2/10 ">
                            
                        </div>
                        <div className="flex flex-col w-6/10 text-black text-left ">
                            <div className="flex w-full font-bold">
                                Nombre de elemento
                            </div>
                            <div className="flex w-full font-normal">
                                Descripcion de elemento
                            </div>
                        </div>
                        <button className="flex w-1/10 justify-center items-center text-black hover:text-white duration-200">
                            <MdEdit fontSize={20} />
                        </button>
                        <button className="flex w-1/10 justify-center items-center text-black hover:text-white duration-200">
                            <MdDelete fontSize={20} />
                        </button>
                    </div>
                    

                </div>}

                <ActionButton additionalClassNames=" md:mt-8 md:mb-10 my-6" isButtondDisabled={isButtonInactive} onClickButtonFunction={addButtonFunction} />
            </div>
            {isPopUpWindowVisible && <PopUpWindowModal onButtonClick={popUpWindowButtonFunction} typeOfContent={typeOfContent} />}
        </div>
    )
}