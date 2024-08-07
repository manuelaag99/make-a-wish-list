import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

import { GET_USER } from "../queries/UserQueries";
import { DELETE_USER } from "../mutations/UserMutations";

import { IoSettingsSharp } from "react-icons/io5";
import EditProfileModal from "./Modals/EditProfileModal";


export default function SmallCard ({ userId }) {
    const [deleteUser] = useMutation(DELETE_USER, {
        variables: { id: userId }
    });

    const [profilePicPathway, setProfilePicPathway] = useState(null);

    const [isEditProfileModalVisible, setIsEditProfileModalVisible] = useState(false);

	const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: userId }
    });
	
    return (
        <div className='flex flex-col w-full md:w-35 justify-center items-start bg-white h-fit p-5 shadow-2xl rounded-md'>
            
            {(error) && <p className="flex flex-col justify-center items-center my-4 mx-auto text-center">Error</p>}

            {(!error && !data && loading) && <p className="flex flex-col justify-center items-center my-5 mx-auto text-center">Cargando...</p>}
            
            {data && <div className="flex flex-col w-full justify-center items-center">
                <div className="flex w-full aspect-square">
                    {profilePicPathway && <img className="w-full" src="" alt="" />}
                    {!profilePicPathway && <div className="w-full h-full bg-gray-300 rounded-md"></div>}
                </div>
                <div className="flex flex-row w-full my-4">
                    <div className="flex flex-col w-9/10">
                        <div className="flex w-full">
                            <p className="text-left text-black font-bold overflow-hidden">
                                {data.user.displayName}
                            </p>
                        </div>
                        <div className="flex w-full">
                            <p className="text-left text-black overflow-hidden">
                                {data.user.shortBio}
                            </p>
                        </div>
                        <button className="flex w-full" onClick={deleteUser}>
                            <p className="text-left text-black overflow-hidden">
                                Borrar usuario
                            </p>
                        </button>
                    </div>
                    <button onClick={() => setIsEditProfileModalVisible(true)} className="flex w-fit justify-center items-start text-black hover:text-gray-400 duration-200" >
                        <IoSettingsSharp fontSize={20} />
                    </button>
                </div>
            </div>}
            

            {isEditProfileModalVisible && <EditProfileModal onClose={() => setIsEditProfileModalVisible(false)} userId={userId} userInfo={data} />}
        </div>
    )
}