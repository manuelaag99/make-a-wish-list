import { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

import ActionButton from "../ActionButton";

import { UPDATE_USER } from "../../mutations/UserMutations";
import { useMutation } from "@apollo/client";
import { GET_USER } from "../../queries/UserQueries";
import ImageUpload from "../ImageUpload";

export default function EditProfileModal ({ onClose, userId, userInfo }) {
    const [updateProfileFormState, setUpdateProfileFormState] = useState({
        username: userInfo ? userInfo.user.username : "",
        email: userInfo ? userInfo.user.email : "",
        displayName: userInfo ? userInfo.user.displayName : "",
        password: userInfo ? userInfo.user.password : "",
        profilePhotoUrl: userInfo ? userInfo.user.profilePhotoUrl : "",
        shortBio: userInfo ? userInfo.user.shortBio : ""
    });

    const inputChangeHandler = (e) => {
        setUpdateProfileFormState({
            ...updateProfileFormState,
            [e.target.name]: e.target.value
        });
    }

    const [updateUser] = useMutation(UPDATE_USER, {
        variables: { id: userId, username: updateProfileFormState.username, email: updateProfileFormState.email, displayName: updateProfileFormState.displayName, password: updateProfileFormState.password, profilePhotoUrl: updateProfileFormState.profilePhotoUrl, shortBio: updateProfileFormState.shortBio },
        refetchQueries: [{ query: GET_USER, variables: { id: userId } }]
    });

    function updateProfile () {
        updateUser(userId, updateProfileFormState.username, updateProfileFormState.email, updateProfileFormState.displayName, updateProfileFormState.password, updateProfileFormState.profilePhotoUrl, updateProfileFormState.shortBio);
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    function togglePasswordVisibility () {
        setIsPasswordVisible(!isPasswordVisible);
    }

    function uploadImage (file) {
        setUpdateProfileFormState({
            ...updateProfileFormState,
            profilePhotoUrl: file
        });
    }

    function signOut () {
        console.log("Sign out");
    }

    return (
        <>
            <div className="flex fixed top-0 left-0 w-full h-full bg-black opacity-35 z-20" onClick={onClose}></div>
            <div className="flex flex-col md:w-7/10 w-95 h-fit justify-center items-center p-5 fixed top-[12%] md:left-[15%] left-[2.5%] bg-white rounded-md shadow-2xl z-105 ">
                {!userInfo && <p className="text-center mx-auto my-10">No se encontró información sobre este perfil; intenta de nuevo.</p>}

                {userInfo && <div className="flex flex-col justify-center items-center w-full">

                    <button className="absolute top-4 right-4 md:top-2 md:right-2 text-black hover:text-gray-300 duration-200" onClick={onClose}>
                        <IoMdClose fontSize={18} />
                    </button>
                    <div className="flex flex-col w-full justify-center items-center text-center pt-2">
                        <p className="text-center concert-font text-3xl">
                            Editar perfil
                        </p>
                    </div>

                    <div className="flex flex-col justify-center md:flex-row w-full">

                        <div className="flex justify-center items-center w-full md:w-4/10 my-5 ">
                            <ImageUpload sendFile={(file) => uploadImage(file)} />
                        </div>

                        <div className="flex flex-col justify-center items-center w-full my-4 ">
                            <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-4">
                                <p className="w-fit md:text-left text-center">
                                    Nombre
                                </p>
                                <input autoComplete="none" className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="displayName" onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.displayName} />
                            </div>
                            <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-3">
                                <p className="w-fit md:text-left text-center">
                                    Usuario
                                </p>
                                <input autoComplete="none" className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="username" onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.username} />
                            </div>
                            <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-3">
                                <p className="w-fit md:text-left text-center whitespace-nowrap">
                                    E-mail
                                </p>
                                <input className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="email" onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.email} />
                            </div>
                            <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-3">
                                <p className="w-fit md:text-left text-center">
                                    Contraseña
                                </p>
                                
                                <div className="flex flex-row bg-gray-300 w-full md:ml-3">
                                    <input autoComplete="none" className="bg-gray-300 w-full py-1 px-2 outline-none " type={isPasswordVisible ? "password" : "text"} name="password" onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.password} />
                                    <button className="bg-gray-300 px-2" onClick={togglePasswordVisibility}>
                                        {isPasswordVisible && <MdOutlineVisibility fontSize={20} />}
                                        {!isPasswordVisible && <MdOutlineVisibilityOff fontSize={20} />}
                                    </button>
                                </div>
                                
                            </div>
                            <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-3">
                                <p className="w-fit md:text-left text-center whitespace-nowrap">
                                    Breve biografía
                                </p>
                                <input className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="shortBio" onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.shortBio} />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-95 my-3">
                        <ActionButton additionalClassNames='w-full disabled:bg-var-2-disabled bg-var-2 hover:bg-var-2-hovered ' isButtonDisabled={false} onClickButtonFunction={updateProfile} textForActionButton="Guardar" />
                    </div>

                    <div className="flex w-95 my-3">
                        <ActionButton additionalClassNames='w-full bg-red-600 hover:bg-red-800 ' isButtonDisabled={false} onClickButtonFunction={signOut} textForActionButton="Cerrar sesión" />
                    </div>
                </div>}
            </div>
        </>
    )
}