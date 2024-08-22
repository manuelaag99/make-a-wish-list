import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/UserQueries";
import UserContainer from "./UserContainer";

export default function ListOfUsers ({ users }) {
    const { loading, error, data } = useQuery(GET_USERS);

    return (
        <div className="flex flex-col w-full mt-12 mx-auto px-4 sm:px-20">
            <UserContainer />
        </div>
    )
}