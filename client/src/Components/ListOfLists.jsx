import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/UserQueries";
import ListContainer from "./ListContainer";

export default function ListOfLists ({ lists }) {
    const { loading, error, data } = useQuery(GET_USERS);

    return (
        <div className="flex flex-col w-full mt-12 mx-auto px-4 sm:px-20">
            <ListContainer />
        </div>
    )
}