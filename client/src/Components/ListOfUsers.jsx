import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/UserQueries";
import UserBox from "./UserBox";

export default function ListOfUsers ({ users }) {
    const { loading, error, data } = useQuery(GET_USERS);
    
    if (loading) return <p className="mx-auto my-8 text-var-3">Loading...</p>

    if (error) return <p className="mx-auto my-8 text-var-3">Error: {error.message}</p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full mt-2 mx-auto px-4 sm:px-20">
                {data && data.users && data.users.length && (data.users.length > 0) && data.users.map((user, index) => {
                    return <UserBox additionalClassnamesForBox="my-3" key={index} user={user} />
                })}
            </div>
        )
    }
}