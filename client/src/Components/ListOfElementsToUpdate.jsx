import CellForListOfElementsToUpdate from "./CellForListOfElementsToUpdate";
import { GET_LIST_ITEM, GET_LIST_ITEMS, GET_LIST_ITEMS_BY_LIST } from "../queries/ListItemQueries";
import { useQuery } from "@apollo/client";
import { GET_LISTS } from "../queries/ListQueries";
import { GET_USER_LIST_ITEMS } from "../queries/ListItemQueries";

export default function ListOfElementsToUpdate ({}) {
    let userid = "6660935f2e128966078f032c";

    const { loading, error, data } = useQuery(GET_LISTS)
    // const { loading, error, data } = useQuery(GET_USER_LIST_ITEMS)

    // const { loading, error, data } = useQuery(GET_USER_LIST_ITEMS, {
    //     variables: { creatorId: userid }
    // })

    
    // const { loading, error, data } = useQuery(GET_LIST_ITEMS_BY_LIST,
    //     { variables: { listId: listId } }
    // )
    console.log(data)

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error </p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full justify-start overflow-auto max-h-32 mt-3">
                <CellForListOfElementsToUpdate />
            </div>
        )
    }
}