import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_LIST_INFO } from "../../queries/ListQueries";

import { IoMdClose } from "react-icons/io";
import ListOfItems from "../ListOfItems";


export default function ListWindowModal ({ listId, onClose }) {
	const { loading, error, data } = useQuery(GET_LIST_INFO,
        { variables: { id: listId } }
    );

    console.log(listId)
    return (
        <>
            <div className="fixed top-0 left-o w-full h-screen bg-black opacity-35 z-40" onClick={onClose}></div>
            <div className='flex flex-col items-start bg-white h-[80%] shadow-2xl rounded-md md:px-12 px-5 py-8 z-50 md:w-5/10 w-95 fixed top-[12%] left-[2.5%] md:left-[25%]'>
                {(error) && <p>Error</p>}

                {(!error && !data && loading) && <p>Cargando...</p>}

                {(!error && !loading && data) && <div className='flex flex-col w-full justify-center'>
                    <p className="text-black text-3xl concert-font text-center mb-3">
                        {data.list.listName}
                    </p>
                    <p className="text-gray-300 text-center">
                        {(data.list.listPrivacy === "public") ? "Lista Pública" : "Lista Privada"}
                    </p>
                    <p className="text-gray-300 text-center">
                        de {(data.list.creator.displayName)}
                    </p>
                    <button className="absolute top-2 right-2 text-black hover:text-gray-300 duration-200" onClick={onClose}>
                        <IoMdClose fontSize={18} />
                    </button>
                </div>}

                {(!error && !loading && data) && <div className="flex flex-col w-full justify-center items-center py-4 px-6">
                    <p className="text-left">
                        {data.list.listDescription}
                    </p>
                </div>}
                    
                <ListOfItems listId={listId} />
            </div>
        </>
    )
}