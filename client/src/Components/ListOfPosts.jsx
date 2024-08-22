import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/UserQueries";
import PostContainer from "./PostContainer";

export default function ListOfPosts ({ posts }) {
    const { loading, error, data } = useQuery(GET_USERS);

    return (
        <div className="flex flex-col w-full mt-12 mx-auto px-4 sm:px-20">
            <PostContainer />
        </div>
    )
}