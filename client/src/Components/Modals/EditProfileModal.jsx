import { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";

import ActionButton from "../ActionButton";


export default function EditProfileModal ({ onClose}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function updateProfile () {
        console.log('Profile updated');
    }

    function togglePasswordVisibility () {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <>
            <div className="flex fixed top-0 left-0 w-full h-full bg-black opacity-35 z-20" onClick={onClose}></div>
            <div className="flex flex-col md:w-7/10 w-95 h-fit justify-center items-center p-5 fixed top-[12%] md:left-[15%] left-[2.5%] bg-white rounded-md shadow-2xl z-50 ">
                <div className="flex flex-col w-full justify-center items-center text-center pt-2 pb-5">
                    <p className="text-center concert-font text-3xl">
                        Editar perfil
                    </p>
                </div>

                <div className="flex flex-col md:flex-row w-full">

                    <div className="flex justify-center items-center w-full md:w-3/10 my-2 ">
                        <div className="flex justify-center items-center w-5/10 md:w-7/10 bg-gray-300 aspect-square rounded-lg cursor-pointer hover:bg-gray-400 duration-200">
                            <div className="flex flex-col justify-center items-center p-2">
                                <LuImagePlus color="gray" fontSize={30} />
                                <p className="mt-2 text-gray-500 text-center whitespace-pre-wrap">
                                    Subir foto de perfil
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full mb-4 mt-4 md:mt-0">
                        <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-2">
                            <p className="w-fit md:text-left text-center">
                                Nombre
                            </p>
                            <input className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " />
                        </div>
                        <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-2">
                            <p className="w-fit md:text-left text-center">
                                Usuario
                            </p>
                            <input className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " />
                        </div>
                        <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-2">
                            <p className="w-fit md:text-left text-center">
                                Contraseña
                            </p>
                            
                            <div className="flex flex-row bg-gray-300 w-full md:ml-3">
                                <input className="bg-gray-300 w-full py-1 px-2 outline-none " type={isPasswordVisible ? "password" : "text"} />
                                <button className="bg-gray-300 px-2" onClick={togglePasswordVisibility}>
                                    {isPasswordVisible && <MdOutlineVisibility fontSize={20} />}
                                    {!isPasswordVisible && <MdOutlineVisibilityOff fontSize={20} />}
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="flex w-95 my-4">
                    <ActionButton additionalClassNames='w-full' isButtonDisabled={false} onClickButtonFunction={updateProfile} textForActionButton="Guardar" />
                </div>
                
                
            </div>
        </>
    )
}