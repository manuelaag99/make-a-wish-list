import { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

export default function EditProfileModal ({ onClose}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <>
            <div className="flex fixed top-0 left-0 w-full h-full bg-black opacity-35 z-20" onClick={onClose}></div>
            <div className="flex flex-col md:w-7/10 w-95 h-fit justify-center items-center p-5 fixed md:left-[15%] left-[2.5%] bg-white rounded-md shadow-2xl z-50 ">
                <div className="flex flex-col w-full justify-center items-center text-center pt-2 pb-5">
                    <p className="text-center concert-font text-3xl">
                        Editar perfil
                    </p>
                </div>
                <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-2">
                    <p className="w-fit md:text-left text-center">
                        Nombre
                    </p>
                    <input className="bg-gray-300 w-full md:ml-3 p-1 outline-none " />
                </div>
                <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-2">
                    <p className="w-fit md:text-left text-center">
                        Usuario
                    </p>
                    <input className="bg-gray-300 w-full md:ml-3 p-1 outline-none " />
                </div>
                <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-2">
                    <p className="w-fit md:text-left text-center">
                        Contraseña
                    </p>
                    
                    <div className="flex flex-row bg-gray-300 w-full md:ml-3">
                        <input className="bg-gray-300 w-full md:ml-3 p-1 outline-none " type="password" />
                        <button className="bg-gray-300 px-2">
                            {isPasswordVisible && <MdOutlineVisibility fontSize={20} />}
                            {!isPasswordVisible && <MdOutlineVisibilityOff fontSize={20} />}
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}