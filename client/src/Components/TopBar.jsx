import { Link, useNavigate } from "react-router-dom"

import { useSearch } from "../Context/SearchQueryContext";

import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiLogout } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function TopBar ({}) {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [isSearchInputVisible, setIsSearchInputVisible] = useState(false)

    console.log(auth)


    function searchButtonFunction () {
        if (!isSearchInputVisible) {
            setIsSearchInputVisible(!isSearchInputVisible)
        } else {
            navigate("/searchresults")
        }
    }

    const { searchQuery, setSearchQuery } = useSearch();

    function inputChangeHandle (event) {
        console.log(event)
        if (event.key !== "Enter") {
            setSearchQuery(event.target.value);
        } else if (event.key === "Enter") {
            navigate("/searchresults")
        }        
    }

    return (
        <div className='flex flex-row w-full justify-between items-center fixed bg-var-2 shadow-2xl h-fit py-4 top-0 z-100 px-4'>
            <div className={"flex flex-row items-center justify-center " + (isSearchInputVisible && " w-full")}>
                {!isSearchInputVisible && <button className="flex md:hidden mx-2 md:mx-6" onClick={() => console.log("df") }>
                    <p className="text-white hover:text-gray-400 duration-200 cursor-pointer">
                    <GiHamburgerMenu fontSize={30} />
                    </p>
                </button>}
                {auth.token && !isSearchInputVisible && <Link className="hidden md:flex mx-2 md:mx-6" to="/profile" onClick={() => console.log("df") }>
                    <p className="text-white hover:text-gray-400 duration-200 cursor-pointer">
                        <IoMdPerson fontSize={30} />
                    </p>
                </Link>}

                <div className={"flex flex-col sm:flex-row items-center justify-center " + " w-full"}>
                    {isSearchInputVisible && <input className={"py-2 px-2 rounded-md w-full outline-none ml-0 md:ml-6 "} onChange={(event) => inputChangeHandle(event)} onKeyDown={(e) => inputChangeHandle(e)} placeholder="Buscar..." value={searchQuery} />}
                    <div className={"flex flex-row justify-between md:justify-center items-center w-full sm:w-fit sm:mt-0 " + (isSearchInputVisible && "mt-4")}>
                        {isSearchInputVisible && <button className="flex ml-2" onClick={() => setIsSearchInputVisible(false)}>
                            <p className="text-white hover:text-gray-400 duration-200 cursor-pointer">
                                <IoMdArrowRoundBack fontSize={40} />
                            </p>
                        </button>}
                        <button className="flex justify-center items-center mx-2 md:mx-6" onClick={searchButtonFunction}>
                            <p className="text-white hover:text-gray-400 duration-200 cursor-pointer">
                                <FaSearch fontSize={30} />
                            </p>
                        </button>
                    </div>
                </div>

                {auth.token && !isSearchInputVisible && <button className="hidden md:flex mx-2 md:mx-6" onClick={() => console.log("df") }>
                    <p className="text-white hover:text-gray-400 duration-200 cursor-pointer">
                        <HiLogout fontSize={30} />
                    </p>
                </button>}
            </div>
            
            
            {!isSearchInputVisible && <Link className="flex w-fit mr-4" to="/feed">
                <img src="../../public/LOGO-WHITE.png" alt='logo' className='h-8 md:h-16 ml-5 my-auto' />
            </Link>}
            
        </div>
    )
}