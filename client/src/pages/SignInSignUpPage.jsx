import { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import ActionButton from "../Components/ActionButton";

export default function SignInSignUpPage ({}) {
    const [isSignUp, setIsSignUp] = useState(true);
    function toggleSignUp () {
        setIsSignUp(!isSignUp);
    }

    const [updateProfileFormState, setUpdateProfileFormState] = useState({
        username: "",
        email: "",
        displayName: "",
        password: ""
    });

    const inputChangeHandler = (e) => {
        setUpdateProfileFormState({
            ...updateProfileFormState,
            [e.target.name]: e.target.value
        });
    }
    
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    function togglePasswordVisibility () {
        setIsPasswordVisible(!isPasswordVisible);
    }

    

    return (
        <>
            <div className='flex md:h-screen h-full w-full justify-center items-start bg-var-1 inter-font pt-24 pb-36'>
					<div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 z-100 '></div>
					<div className="flex flex-col w-95 md:w-6/10 justify-center items-center bg-white p-6 shadow-2xl rounded-md mt-12">
                        <div className="flex w-full justify-center items-center concert-font text-3xl">
                            {isSignUp ? "Registrarse" : "Iniciar sesión"}
                        </div>

                        <div className="flex flex-col w-full justify-center items-center my-3">
                            {isSignUp && <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-4">
                                <p className="w-fit md:text-left text-center">
                                    Nombre
                                </p>
                                <input autoComplete="none" className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="displayName" onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.displayName} />
                            </div>}
                            {isSignUp && <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-4">
                                <p className="w-fit md:text-left text-center">
                                    Usuario
                                </p>
                                <input autoComplete="none" className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="username" onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.username} />
                            </div>}
                            <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-4">
                                <p className="w-fit md:text-left text-center whitespace-nowrap">
                                    E-mail
                                </p>
                                <input className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="email" onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.email} />
                            </div>
                            <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-4">
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
                        </div>

                        <div className="flex w-9/10 my-3">
                            <ActionButton additionalClassNames="text-2xl" textForActionButton={isSignUp ? "Registrarse" : "Iniciar sesión"} />
                        </div>

                        <div className="flex flex-row w-full justify-center items-center px-5 my-2">
                            <p>
                                {isSignUp && "o, si ya tienes cuenta, "}
                                {!isSignUp && "o, si no tienes cuenta, "}
                            </p>
                            <button className="font-bold text-var-2 hover:text-var-2-hovered duration-200 ml-1.5" onClick={toggleSignUp}>
                                {isSignUp && "inicia sesión"}
                                {!isSignUp && "registrate"}
                            </button>
                        </div>

                    </div>
			</div>
        </>
    )
}