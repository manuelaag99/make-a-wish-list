import { Link } from "react-router-dom"

import { useSearch } from "../Context/SearchQueryContext";

import { FaSearch } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";


export default function TopBar ({}) {
    const [isSearchInputVisible, setIsSearchInputVisible] = useState(false)



    function searchButtonFunction () {
        if (!isSearchInputVisible) {
            setIsSearchInputVisible(!isSearchInputVisible)
        }
    }

    const { searchQuery, setSearchQuery } = useSearch();

    function inputChangeHandle (e) {
        // setSearchQueryState(event.target.value);
        setSearchQuery(e.target.value);
    }

    function submitSearchHandle (e) {
        e.preventDefault();
        navigate("/searchresults");
    }
    console.log(searchQuery)

    return (
        <div className='flex flex-row w-full justify-between items-center fixed bg-var-2 shadow-2xl h-24 top-0 z-100 px-4'>
            <div className="flex flex-row items-center justify-center">
                <Link className="flex mx-6" to="/profile" onClick={() => console.log("df") }>
                    <p className="text-white hover:text-gray-400 duration-200 cursor-pointer">
                        <IoMdPerson fontSize={30} />
                    </p>
                    
                </Link>
                <div className="flex flex-row items-center justify-center">
                    {isSearchInputVisible && <input className="py-2 px-2 rounded-md outline-none ml-6" onChange={(e) => inputChangeHandle(e)} placeholder="Buscar..." />}
                    {isSearchInputVisible && <button className="flex ml-2 mr-6" onClick={() => setIsSearchInputVisible(false)}>
                        <p className="text-white hover:text-gray-400 duration-200 cursor-pointer">
                            <IoMdArrowRoundBack fontSize={40} />
                        </p>
                    </button>}
                    <button className="flex mx-6" onClick={searchButtonFunction}>
                        <p className="text-white hover:text-gray-400 duration-200 cursor-pointer">
                            <FaSearch fontSize={30} />
                        </p>
                    </button>
                </div>
                <button className="flex mx-6" onClick={() => console.log("df") }>
                    <p className="text-white hover:text-gray-400 duration-200 cursor-pointer">
                        <HiLogout fontSize={30} />
                    </p>
                </button>
            </div>
            
            
            <Link className="flex" to="/feed">
                <img src="../../public/LOGO-WHITE.png" alt='logo' className='h-16 ml-5 my-auto' />
            </Link>
            
        </div>
    )
}