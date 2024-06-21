import { useState } from "react";
import CellForListElement from "../CellForListElement";
import { gql, useQuery } from "@apollo/client";

// const GET_LIST_BY_ID = gql`
// 	query getListById($id: ID!) {
// 		list(id: $id) {
// 		  creator {
// 			id
// 		  }
// 		  listName
// 		  listPrivacy
// 		  listDescription
// 		}
// 	}
// `

const GET_LIST_BY_ID = gql`
	query getListById {
		list(id: "6660935f2e128966078f032c") {
		  creator {
			id
		  }
		  listName
		  listPrivacy
		  listDescription
		}
	}
`

export default function ListWindowModal ({ listId, onClose }) {
	const { loading, error, data } = useQuery(GET_LIST_BY_ID);
	const [selectedListId, setSelectedListId] = useState(null);

	if (error) return <p>Error</p>

	if (!error && !data && loading) return <p>Loading...</p>
    console.log(data)
    return (
        <>
            <div className="fixed top-0 left-o w-full h-screen bg-black opacity-35 z-40"></div>
            <div className='flex flex-col items-start bg-white h-[80%] shadow-2xl rounded-md px-12 py-8 z-50 md:w-5/10 w-95 fixed top-[10%] left-[2.5%] md:left-[25%]'>
                <div className='flex flex-col w-full justify-center'>
                    <p className="text-black text-3xl concert-font text-center mb-3">
                        Nombre de lista
                        {/* {data.list.listName} */}
                    </p>
                    <p className="text-gray-300 text-center">
                        Privacidad de lista
                        {/* {(data.list.listPrivacy === "public") ? "Lista Pública" : "Lista Privada"} */}
                    </p>
                </div>

                <div className="flex flex-col w-full justify-center items-center py-6 px-6">
                    <p className="text-left">
                        Descripción de lista
                        {/* {data.list.listDescription} */}
                    </p>
                </div>

                <div className="flex flex-col justify-start items-center w-full h-4/10 overflow-auto">
                    <CellForListElement />

                </div>
            </div>
        </>
    )
}