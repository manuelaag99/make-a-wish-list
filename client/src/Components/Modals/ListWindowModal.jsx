import { useState } from "react";
import CellForListElement from "../CellForListElement";
import { gql, useQuery } from "@apollo/client";
import { GET_LIST } from "../../queries/ListQueries";

import { IoMdClose } from "react-icons/io";


export default function ListWindowModal ({ listId, onClose }) {
	const { loading, error, data } = useQuery(GET_LIST,
        { variables: { id: listId } }
    );

	if (error) return <p>Error</p>

	if (!error && !data && loading) return <p>Loading...</p>

    if (!error && !loading && data) {
        return (
            <>
                <div className="fixed top-0 left-o w-full h-screen bg-black opacity-35 z-40" onClick={onClose}></div>
                <div className='flex flex-col items-start bg-white h-[80%] shadow-2xl rounded-md md:px-12 px-5 py-8 z-50 md:w-5/10 w-95 fixed top-[10%] left-[2.5%] md:left-[25%]'>
                    <div className='flex flex-col w-full justify-center'>
                        <p className="text-black text-3xl concert-font text-center mb-3">
                            {data.list.listName}
                        </p>
                        <p className="text-gray-300 text-center">
                            {(data.list.listPrivacy === "public") ? "Lista Pública" : "Lista Privada"}
                        </p>
                        <button className="absolute top-2 right-2 text-black hover:text-gray-300 duration-200" onClick={onClose}>
                            <IoMdClose fontSize={18} />
                        </button>
                    </div>
    
                    <div className="flex flex-col w-full justify-center items-center py-6 px-6">
                        <p className="text-left">
                            {data.list.listDescription}
                        </p>
                    </div>
    
                    <div className="flex flex-col justify-start items-center w-full h-4/10 overflow-auto">
                        <CellForListElement />
                    </div>
                </div>
            </>
        )
    }
}