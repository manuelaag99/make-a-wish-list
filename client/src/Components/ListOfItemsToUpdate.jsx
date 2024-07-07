import { GET_LIST_ITEMS_BY_LIST } from "../queries/ListItemQueries";
import { useQuery } from "@apollo/client";
import CellForListOfItemsToUpdate from "./CellForListOfItemsToUpdate";
import AddOrUpdateContentModal from "./Modals/AddOrUpdateContentModal";

export default function ListOfItemsToUpdate ({ listId }) {
    let userid = "6660935f2e128966078f032c";
    
    const { loading, error, data } = useQuery(GET_LIST_ITEMS_BY_LIST,
        { variables: { listId: listId } }
    )

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error</p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full justify-start overflow-auto max-h-32 mt-3">
                {data && (data.listItemsByList) && (data.listItemsByList.length > 0) && data.listItemsByList.map((listItem, index) => {
                    return (
                        <CellForListOfItemsToUpdate key={index} listItem={listItem} />
                    )
                })}
                {data && (data.listItemsByList) && (data.listItemsByList.length === 0) && <p className="text-gray-500 text-center">No hay elementos en esta lista</p>}
            </div>
        )
    }
}