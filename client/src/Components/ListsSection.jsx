import { useQuery } from "@apollo/client";
import ListBox from "./ListBox";
import { useState } from "react";
import { GET_USER_LISTS } from "../queries/ListQueries";

export default function ListsSection ({ selectList  }) {
	const { loading, error, data } = useQuery(GET_USER_LISTS);
	const [selectedListId, setSelectedListId] = useState(null);

	if (error) return <p>Error</p>

	if (!error && !data && loading) return <p>Loading...</p>

	function clickBoxHandleFunction (list) {
		setSelectedListId(list.id)
		selectList(list.id)
	}
	
    if (!error && !loading && data && data.listsByCreator.length) {
		return (
			<div className="flex flex-col w-full">
				<div className='flex flex-col w-full rounded-none'>
					<div className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer'>
						<p className='text-center font-bold overflow-hidden'>
							+ Agregar lista nueva
						</p>
					</div>
				</div>
	
				{data && (data.listsByCreator) && (data.listsByCreator.length > 0) && data.listsByCreator.map((list) => {
					return <ListBox onClickBox={() => clickBoxHandleFunction(list)} key={list.id} listId={list.id} listName={list.listName} listDescription={list.listDescription} listPrivacy={list.listPrivacy} />
				})}
			</div>
		)
	}
}