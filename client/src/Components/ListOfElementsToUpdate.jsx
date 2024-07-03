import CellForListOfElementsToUpdate from "./CellForListOfElementsToUpdate";
import { GET_LIST_ITEM, GET_LIST_ITEMS, GET_LIST_ITEMS_BY_LIST } from "../queries/ListItemQueries";
import { useQuery } from "@apollo/client";
import { GET_LISTS } from "../queries/ListQueries";

export default function ListOfElementsToUpdate ({ listId }) {
    const { loading, error, data } = useQuery(GET_LIST_ITEM, {
        variables: { id: "66849a7ba3ffd912ebdbb197" }
    })

    // const { loading, error, data } = useQuery(GET_LIST_ITEMS_BY_LIST,
    //     { variables: { listId: listId } }
    // )
    console.log(data)

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error </p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full justify-start overflow-auto max-h-28 mt-3">
                <CellForListOfElementsToUpdate />
            </div>
        )
    }
}