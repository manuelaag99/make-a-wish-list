import CellForListOfElementsToUpdate from "./CellForListOfElementsToUpdate";
import { GET_LIST_ITEMS_BY_LIST } from "../queries/ListItemQueries";
import { useQuery } from "@apollo/client";

export default function ListOfElementsToUpdate ({ listId }) {
    let userid = "6660935f2e128966078f032c";
    
    const { loading, error, data } = useQuery(GET_LIST_ITEMS_BY_LIST,
        { variables: { listId: listId } }
    )
    console.log(data)

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error </p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full justify-start overflow-auto max-h-32 mt-3">
                {data && data.listItemsByList && data.listItemsByList.map((listItem, index) => {
                    return (
                        <CellForListOfElementsToUpdate key={index} listItem={listItem} />
                    )
                })}
            </div>
        )
    }
}