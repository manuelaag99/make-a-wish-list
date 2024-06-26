import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

import { GET_USER } from "../queries/UserQueries";
import { DELETE_USER } from "../mutations/UserMutations";


export default function SmallCard ({ userId }) {
    const [deleteUser] = useMutation(DELETE_USER, {
        variables: { id: userId }
    });

    const [profilePicPathway, setProfilePicPathway] = useState(null);
	const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: userId }
    });
	
	if (loading) return <p>Loading...</p>
	
	if (error) return <p>Error</p>

    
    if (!error && !loading && data) return (
        <div className='flex flex-col w-full md:w-35 justify-center items-start bg-white h-fit p-5 shadow-2xl rounded-md'>
            <div className="flex w-full aspect-square">
                {profilePicPathway && <img className="w-full" src="" alt="" />}
                {!profilePicPathway && <div className="w-full h-full bg-gray-300 rounded-md"></div>}
            </div>
            <div className="flex flex-col w-full my-4">
                <div className="flex w-full">
                    <p className="text-left text-black font-bold overflow-hidden">
                        {data.user.displayName}
                    </p>
                </div>
                <div className="flex w-full">
                    <p className="text-left text-black overflow-hidden">
                        Biografía
                    </p>
                </div>
                <button className="flex w-full" onClick={deleteUser}>
                    <p className="text-left text-black overflow-hidden">
                        Borrar usuario
                    </p>
                </button>
            </div>
        </div>
    )
}