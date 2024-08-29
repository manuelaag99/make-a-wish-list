import { useQuery } from "@apollo/client";
import ListContainer from "./ListContainer";
import { GET_LISTS } from "../queries/ListQueries";
import ListBox from "./ListBox";
import { useEffect, useState } from "react";

export default function ListOfLists ({ isSearchResultsPage, lists, searchQuery }) {
    const { loading, error, data } = useQuery(GET_LISTS);
    const [listsToDisplay, setListsToDisplay] = useState(null);

    useEffect(() => {
        if (isSearchResultsPage && data) {
            setListsToDisplay(data.lists.filter((list) => list.listName.toLowerCase().includes(searchQuery.toLowerCase())));
        }
    }, [searchQuery, data, isSearchResultsPage]);

    if (loading) return <p className="mx-auto my-8 text-var-3">Loading...</p>

    if (error) return <p className="mx-auto my-8 text-var-3">Error: {error.message}</p>

    if (!loading && !error && data) {
        return (
            <div className="flex flex-col w-full mt-2 mx-auto px-4 sm:px-20">
                {(listsToDisplay && listsToDisplay.length && (listsToDisplay.length > 0)) ? listsToDisplay.map((list, index) => {
                    return <ListBox additionalClassnamesForBox="my-3" isOnProfilePage={false} key={index} list={list} />
                }) : null }
                {(listsToDisplay && (listsToDisplay.length < 1)) ? <div>
                    <p className="mx-auto my-8 text-var-3 text-center">No se encontraron resultados</p>
                </div> : null}
            </div>
        )
    }
}