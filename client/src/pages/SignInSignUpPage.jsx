import { useEffect, useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import ActionButton from "../Components/ActionButton";
import TopBar from "../Components/TopBar";

export default function SignInSignUpPage ({}) {
    const [isSignUp, setIsSignUp] = useState(true);
    function toggleSignUp () {
        setIsSignUp(!isSignUp);
    }

    const [updateProfileFormState, setUpdateProfileFormState] = useState({});

    useEffect(() => {
        if (isSignUp) {
            setUpdateProfileFormState({
                email: "",
                password: ""
            });
        } else if (!isSignUp) {
            setUpdateProfileFormState({
                email: "",
                password: "",
                displayName: "",
                username: ""
            });
        }
    }, [isSignUp])

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

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    useEffect(() => {
        if ((updateProfileFormState.email && updateProfileFormState.email.trim() !== "") && (updateProfileFormState.password && updateProfileFormState.password.trim() !== "")) {
            if (isSignUp) {
                if ((updateProfileFormState.displayName && updateProfileFormState.displayName.trim() !== "") && (updateProfileFormState.username && updateProfileFormState.username.trim() !== "")) {
                    setIsButtonDisabled(false);
                } else {
                    setIsButtonDisabled(true);
                }
            } else if (!isSignUp) {
                setIsButtonDisabled(false);
            }
        } else {
            setIsButtonDisabled(true);
        }
    }, [updateProfileFormState, isSignUp]);

    return (
        <>
            <div className='flex md:h-screen h-full w-full justify-center items-start bg-var-1 inter-font pt-24 pb-36'>
					<TopBar />
					<div className="flex flex-col w-95 md:w-6/10 justify-center items-center bg-white p-6 shadow-2xl rounded-md mt-12">
                        <div className="flex w-full justify-center items-center concert-font text-3xl">
                            {isSignUp ? "Registrarse" : "Iniciar sesión"}
                        </div>

                        <div className="flex flex-col w-full justify-center items-center my-3">
                            {isSignUp && <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-4">
                                <p className="w-fit md:text-left text-center mb-1">
                                    Nombre
                                </p>
                                <input autoComplete="none" className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="displayName" placeholder="Escribe tu nombre de usuario..." onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.displayName} />
                            </div>}
                            {isSignUp && <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-4">
                                <p className="w-fit md:text-left text-center mb-1">
                                    Usuario
                                </p>
                                <input autoComplete="none" className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="username" placeholder="Escribe tu nombre..." onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.username} />
                            </div>}
                            <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-4">
                                <p className="w-fit md:text-left text-center whitespace-nowrap mb-1">
                                    E-mail
                                </p>
                                <input className="bg-gray-300 w-full md:ml-3 py-1 px-2 outline-none " name="email" placeholder="Escribe tu e-mail..." onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.email} />
                            </div>
                            <div className="flex md:flex-row flex-col w-9/10 justify-center items-center my-4">
                                <p className="w-fit md:text-left text-center mb-1">
                                    Contraseña
                                </p>
                                
                                <div className="flex flex-row bg-gray-300 w-full md:ml-3">
                                    <input autoComplete="none" className="bg-gray-300 w-full py-1 px-2 outline-none " type={isPasswordVisible ? "password" : "text"} name="password" placeholder={isSignUp ? "Crea una contraseña..." : "Escribe tu contraseña..."} onChange={(e) => inputChangeHandler(e)} value={updateProfileFormState.password} />
                                    <button className="bg-gray-300 px-2" onClick={togglePasswordVisibility}>
                                        {isPasswordVisible && <MdOutlineVisibility fontSize={20} />}
                                        {!isPasswordVisible && <MdOutlineVisibilityOff fontSize={20} />}
                                    </button>
                                </div>
                                
                            </div>
                        </div>

                        <div className="flex w-9/10 my-3">
                            <ActionButton additionalClassNames="text-2xl disabled:bg-var-2-disabled  bg-var-2 hover:bg-var-2-hovered " isButtonDisabled={isButtonDisabled} onClickButtonFunction="" textForActionButton={isSignUp ? "Registrarse" : "Iniciar sesión"} />
                        </div>

                        <button className="flex flex-row w-full justify-center items-center px-5 my-2 hover:text-var-2 duration-300" onClick={toggleSignUp}>
                            <p>
                                {isSignUp && "o, si ya tienes cuenta, inicia sesión"}
                                {!isSignUp && "o, si no tienes cuenta, registrate"}
                            </p>
                        </button>
                    </div>
			</div>
        </>
    )
}