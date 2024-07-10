import { useEffect, useState } from "react";
import PopUpWindowModal from "./PopUpWindowModal";
import ActionButton from "../ActionButton";
import { IoMdClose } from "react-icons/io";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_LIST, UPDATE_LIST } from "../../mutations/ListMutations";
import { GET_LISTS, GET_USER_LISTS } from "../../queries/ListQueries";
import { ADD_POST } from "../../mutations/PostMutations";
import { GET_POSTS } from "../../queries/PostQueries";
import ListOfItemsToUpdate from "../ListOfItemsToUpdate";
import { ADD_LIST_ITEM } from "../../mutations/ListItemMutations";



export default function AddOrUpdateContentModal ({ contentToUpdate, isAdd, onClose, typeOfContent, userId }) {
    const { loading, error, data } = useQuery(GET_USER_LISTS,
        {
            variables: { creatorId: userId }
        }
    )

    let newCreationDate = new Date().toISOString();
    const [errorWithAddingOrUpdating, setErrorWithAddingOrUpdating] = useState(false);
    const [isPopUpWindowVisible, setIsPopUpWindowVisible] = useState(false);
    const [popUpWindowText, setPopUpWindowText] = useState('');

    function addButtonFunction () {
        console.log(formState.title, formState.body, userId)
        if (isAdd) {
            if (typeOfContent === 'list') {
                addList(formState.title, formState.privacy, formState.description, userId);
                setPopUpWindowText("Lista agregada con éxito")
            } else if (typeOfContent === 'post') {
                addPost(formState.title, formState.body, newCreationDate, userId);
                setPopUpWindowText("Publicación agregada con éxito")
            } else if (typeOfContent === 'item') {
                addListItem(formState.list, formState.title, formState.description, formState.photoUrl, userId);
                setPopUpWindowText("Elemento agregado con éxito")
            }
        } else if (!isAdd) {
            if (typeOfContent === 'list') {
                updateList(formState.id, formState.title, formState.privacy, formState.description);
                setPopUpWindowText("Lista actualizada con éxito")
            } else if (typeOfContent === 'post') {
                setPopUpWindowText("Publicación actualizada con éxito")
            } else if (typeOfContent === 'item') {
                setPopUpWindowText("Elemento actualizada con éxito")
            }
        }
        setIsPopUpWindowVisible(true);
    }

    function closePopUpWindowFunction () {
        if (!errorWithAddingOrUpdating) {
            setIsPopUpWindowVisible(false);
            onClose();
        }
    }

    const [formState, setFormState] = useState({});
    useEffect(() => {
        if (typeOfContent === 'list') {
            setFormState({ id: contentToUpdate ? contentToUpdate.id : null, title: contentToUpdate ? contentToUpdate.listName : null, description: contentToUpdate ? contentToUpdate.listDescription : null, privacy: contentToUpdate ? contentToUpdate.listPrivacy : null });
        } else if (typeOfContent === 'post') {
            setFormState({ id: contentToUpdate ? contentToUpdate.id : null, title: contentToUpdate ? contentToUpdate.postTitle : null, body: contentToUpdate ? contentToUpdate.postBody : null });
        } else if (typeOfContent === 'item') {
            setFormState({ id: contentToUpdate ? contentToUpdate.id : null, title: contentToUpdate ? contentToUpdate.itemName : null, description: contentToUpdate ? contentToUpdate.itemDescription : null, photoUrl: contentToUpdate ? contentToUpdate.itemPhotoUrl : null, list: contentToUpdate ? contentToUpdate.list.id : null });
        }
    }, [contentToUpdate, typeOfContent])

    console.log(formState) 

    const [isButtonInactive, setIsButtonInactive] = useState(false);
    function inputChangeHandler (e) {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }

    function checkFormValidity () {
        if (formState.title && formState.description) {
            if (typeOfContent === 'list') {
                if (formState.privacy) {
                    setIsButtonInactive(false);
                } else {
                    setIsButtonInactive(true);
                }
            } else if (typeOfContent === 'item') {
                if (formState.photoUrl && formState.list) {
                    setIsButtonInactive(false);
                } else {
                    setIsButtonInactive(true);
                }
            } else if (typeOfContent === 'post') {
                if (formState.body) {
                    setIsButtonInactive(false);
                } else {
                    setIsButtonInactive(true);
                }
            }
        } else {
            setIsButtonInactive(true);
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

    const [updateList] = useMutation(UPDATE_LIST, {
        variables: { listId: formState.id, listName: formState.title, listPrivacy: formState.privacy, listDescription: formState.description },
        refetchQueries: [{ query: GET_LISTS }]
    })

    const [addPost] = useMutation(ADD_POST, {
        variables: { postTitle: formState.title, postBody: formState.body, creationDate: newCreationDate, creatorId: userId },
        update(cache, { data: { addPost }}) {
            const { posts } = cache.readQuery({ query: GET_POSTS });

            cache.writeQuery({
                query: GET_POSTS,
                data: { posts: posts.concat([addPost]) }
            })
        }
    })

    const [addListItem] = useMutation(ADD_LIST_ITEM, {
        variables: { listId: formState.list, itemName: formState.title, itemDescription: formState.description, itemPhotoUrl: formState.photoUrl, creatorId: userId },
        update(cache, { data: { addListItem }}) {
            const { listItems } = cache.readQuery({ query: GET_LISTS });

            cache.writeQuery({
                query: GET_LISTS,
                data: { listItems: listItems.concat([addListItem]) }
            })
        }
    })

    return (
            <div>
                <div className="flex fixed top-0 left-0 w-full h-full bg-black opacity-35 z-20" onClick={onClose}></div>
                <div className="flex flex-col md:w-6/10 w-95 h-fit md:px-14 px-6 bg-white fixed top-[15%] left-[2.5%] md:left-[20%] z-30 rounded-md">
                    <button className="absolute top-4 right-4 md:top-2 md:right-2 text-black hover:text-gray-300 duration-200" onClick={onClose}>
                        <IoMdClose fontSize={18} />
                    </button>
                    <div className="flex justify-center items-center w-full md:mt-8 mt-5 md:mb-8 mb-2">
                        {(isAdd) && (typeOfContent === 'list') && <p className="text-black text-3xl concert-font text-center">Agregar lista</p>}
                        {(!isAdd) && (typeOfContent === 'list') && <p className="text-black text-3xl concert-font text-center">Modificar lista</p>}
                        {(isAdd) && (typeOfContent === 'item') && <p className="text-black text-3xl concert-font text-center">Agregar elemento</p>}
                        {(!isAdd) && (typeOfContent === 'item') && <p className="text-black text-3xl concert-font text-center">Modificar elemento</p>}
                        {(isAdd) && (typeOfContent === 'post') && <p className="text-black text-3xl concert-font text-center">Agregar publicación</p>}
                        {(!isAdd) && (typeOfContent === 'post') && <p className="text-black text-3xl concert-font text-center">Modificar publicación</p>}
                    </div>
    
                    <div className={"flex flex-col w-full my-2 items-center " + (typeOfContent === "post" ? " md:flex-col" : " md:flex-row" )}>
                        {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Nombre de la lista: </p>}
                        {(typeOfContent === 'item') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Nombre del elemento: </p>}
                        {(typeOfContent === 'post') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-2 ">Título de publicación: </p>}
                        <input className="bg-gray-300 px-2 py-1 w-full" type="text" name="title" placeholder="Título" onChange={(e) => inputChangeHandler(e)} value={formState.title} />
                    </div>
    
                    <div className={"flex flex-col w-full my-2 items-center " + (typeOfContent === "post" ? " md:flex-col" : " md:flex-row" )}>
                        {(typeOfContent === 'list') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Descripcion de la lista: </p>}
                        {(typeOfContent === 'item') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Descripcion del elemento: </p>}
                        {(typeOfContent === 'post') && <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-2 ">Contenido: </p>}
                        {((typeOfContent === 'list') || (typeOfContent === 'item')) && <input className="bg-gray-300 px-2 py-1 w-full" type="text" name="description" placeholder="Título" onChange={(e) => inputChangeHandler(e)} value={formState.description} />}
                        {(typeOfContent === 'post') && <textarea className="bg-gray-300 px-2 py-1 w-full" type="text" name="body" placeholder="Título" onChange={(e) => inputChangeHandler(e)}  value={formState.body} />}
                    </div>
    
                    {((typeOfContent === 'list') || (typeOfContent === 'item')) && <div className="flex flex-col md:flex-row md:w-full my-2 items-center py-1">
                        <div className="">
                            {(typeOfContent === 'list') && <p className="text-black md:mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Privacidad de la lista: </p>}
                            {(typeOfContent === 'item') && <p className="text-black md:mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Enlace de foto del elemento: </p>}
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
                        {(typeOfContent === 'item') && <input className="bg-gray-300 px-2 py-1 w-full" type="text" name="photoUrl" placeholder="Enlace" onChange={(e) => inputChangeHandler(e)} value={formState.photoUrl} />}
    
                    </div>}
    
                    {(typeOfContent === 'item') && data && (data.listsByCreator) && (data.listsByCreator.length > 0) && <div className="flex flex-col md:flex-row md:w-full my-2 items-center py-1">
                        <p className="text-black mr-2 w-fit md:whitespace-nowrap mb-2 md:mb-0 ">Lista a la que pertenece: </p>
                        <select className="bg-gray-300 px-2 py-1 w-full" id="list" name="list" onChange={(e) => inputChangeHandler(e)} value={formState.list} > 
                            <option value="">----</option>
                            {data.listsByCreator.map((list, index) => {
                                return (
                                    <option className="" key={index} value={list.id}>{list.listName}</option>
                                )
                            })}
                        </select>
                    </div>}
                    {(typeOfContent === 'item') && data && (data.listsByCreator) && (data.listsByCreator.length === 0) && <p className="text-gray-500 text-center mt-3">No puedes agregar elementos porque no has creado ninguna lista</p>}
    
                    {(typeOfContent === 'list') && (!isAdd) && (contentToUpdate) && <ListOfItemsToUpdate listId={contentToUpdate.id} />}
    
                    <ActionButton additionalClassNames=" md:mt-8 md:mb-10 my-6" isButtonDisabled={isButtonInactive} onClickButtonFunction={addButtonFunction} />
                </div>
                {isPopUpWindowVisible && <PopUpWindowModal onButtonClick={closePopUpWindowFunction} textForPopUp={popUpWindowText} typeOfContent={typeOfContent} onClose={closePopUpWindowFunction} />}
            </div>
        )
}