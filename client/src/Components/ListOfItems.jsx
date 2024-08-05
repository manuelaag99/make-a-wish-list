import { useQuery } from "@apollo/client"
import CellForListItem from "./CellForListItem"
import { GET_LIST_ITEMS_BY_LIST } from "../queries/ListItemQueries"

export default function ListOfItems ({ listId }) {
    const { loading, error, data } = useQuery(GET_LIST_ITEMS_BY_LIST,
        {
            variables: { listId }
        }
    )

    console.log(data)

    if (loading) return <p>Cargando...</p>

    if (error) return <p>Error</p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col justify-start items-center w-full h-4/10 overflow-auto">
                    {data && (data.listItemsByList) && (data.listItemsByList.length > 0) &&  data.listItemsByList.map((listItem, index) => {
                        return (
                            <CellForListItem key={index} listItem={listItem} />
                        )
                    })}
                {data && (data.listItemsByList) && (data.listItemsByList.length === 0) && <p className="text-gray-500 text-center">No hay elementos en esta lista</p>}
            </div>
        )
    }
}