import { useState } from "react";
import ListOfUsers from "../Components/ListOfUsers";
import TopBar from "../Components/TopBar";
import ListOfLists from "../Components/ListOfLists";
import ListOfPosts from "../Components/ListOfPosts";

export default function SearchResultsPage ({}) {
    const [selectedTab, setSelectedTab] = useState("users");
    
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

            {(selectedTab === "users") && <ListOfUsers />}
            {(selectedTab === "lists") && <ListOfLists />}
            {(selectedTab === "posts") && <ListOfPosts />}
        </div>
    )
}