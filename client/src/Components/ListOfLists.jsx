import { useQuery } from "@apollo/client";
import ListContainer from "./ListContainer";
import { GET_LISTS } from "../queries/ListQueries";
import ListBox from "./ListBox";

export default function ListOfLists ({ lists }) {
    const { loading, error, data } = useQuery(GET_LISTS);

    if (loading) return <p className="mx-auto my-8 text-var-3">Loading...</p>

    if (error) return <p className="mx-auto my-8 text-var-3">Error: {error.message}</p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full mt-2 mx-auto px-4 sm:px-20">
                {data && data.lists && data.lists.length && (data.lists.length > 0) && data.lists.map((list, index) => {
                    return <ListBox additionalClassnamesForBox="my-3" isOnProfilePage={false} key={index} list={list} />
                }) }
            </div>
        )
    }
}