import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/UserQueries";
import UserBox from "./UserBox";
import { useEffect, useState } from "react";

export default function ListOfUsers ({ isSearchResultsPage, searchQuery, users }) {
    const { loading, error, data } = useQuery(GET_USERS);
    const [usersToDisplay, setUsersToDisplay] = useState(null);

    // let usersToDisplay;
    useEffect(() => {
        if (isSearchResultsPage && data) {
            setUsersToDisplay(data.users.filter((user) => user.displayName.toLowerCase().includes(searchQuery.toLowerCase())));
            // usersToDisplay = data.users.filter((user) => user.displayName.toLowerCase().includes(searchQuery.toLowerCase()));
        }
    }, [data, searchQuery])
    console.log(usersToDisplay);
    
    if (loading) return <p className="mx-auto my-8 text-var-3">Loading...</p>

    if (error) return <p className="mx-auto my-8 text-var-3">Error: {error.message}</p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full mt-2 mx-auto px-4 sm:px-20">
                {data && data.users && data.users.length && (data.users.length > 0) && usersToDisplay && usersToDisplay.length && (usersToDisplay.length > 0) && usersToDisplay.map((user, index) => {
                    return <UserBox additionalClassnamesForBox="my-3" key={index} user={user} />
                })}
                {data && data.users && data.users.length && (data.users.length > 0) && !usersToDisplay && <div>
                    <p className="mx-auto my-8 text-var-3 text-center">No se encontraron resultados</p>
                </div>}
            </div>
        )
    }
}