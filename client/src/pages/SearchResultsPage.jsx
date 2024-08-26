import { useState } from "react";
import ListOfUsers from "../Components/ListOfUsers";
import TopBar from "../Components/TopBar";
import ListOfLists from "../Components/ListOfLists";
import ListOfPosts from "../Components/ListOfPosts";
import { useSearch } from "../Context/SearchQueryContext";

export default function SearchResultsPage ({}) {
    const [selectedTab, setSelectedTab] = useState("users");

    const { searchQuery, setSearchQuery } = useSearch();
    
    return (
        <div className="flex flex-col w-full justify-center">
            <TopBar />

            <div className="flex flex-col sm:flex-row w-full mt-32">
                <button className={"flex w-full sm:w-1/3 py-2 sm:py-0 justify-center text-center text-var-3 " + (selectedTab === "users" && "font-bold")} onClick={() => setSelectedTab("users")}>
                    Usuarios
                </button>
                <button className={"flex w-full sm:w-1/3 py-2 sm:py-0 justify-center text-center text-var-3 " + (selectedTab === "lists" && "font-bold")} onClick={() => setSelectedTab("lists")}>
                    Listas
                </button>
                <button className={"flex w-full sm:w-1/3 py-2 sm:py-0 justify-center text-center text-var-3 " + (selectedTab === "posts" && "font-bold")} onClick={() => setSelectedTab("posts")}>
                    Publicaciones
                </button>
            </div>

            <div className="flex flex-col w-full justify-center items-center py-16">
                <div className=" bg-var-3 w-full h-[1px] opacity-40"></div>
            </div>

            {(selectedTab === "users") && <ListOfUsers isSearchResultsPage={true} searchQuery={searchQuery} />}
            {(selectedTab === "lists") && <ListOfLists isSearchResultsPage={true} searchQuery={searchQuery} />}
            {(selectedTab === "posts") && <ListOfPosts isSearchResultsPage={true} searchQuery={searchQuery} />}
        </div>
    )
}