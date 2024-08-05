import { useQuery } from "@apollo/client";
import ListBox from "./ListBox";
import { useState } from "react";
import { GET_USER_LISTS } from "../queries/ListQueries";
import AddOrUpdateContentModal from "./Modals/AddOrUpdateContentModal";

export default function ListsSection ({ selectList  }) {
	const { loading, error, data } = useQuery(GET_USER_LISTS, {
		variables: { creatorId: "6660935f2e128966078f032c" }
	});
	const [isAddOrUpdateContentModalVisible, setIsAddOrUpdateContentModalVisible] = useState(false);
	const [selectedListId, setSelectedListId] = useState(null);

	function clickBoxHandleFunction (list) {
		setSelectedListId(list.id)
		selectList(list.id)
	}

	let userid = "6660935f2e128966078f032c";

	return (
		<div className="flex flex-col w-full">
			<div className='flex flex-col w-full rounded-none'>
				
				{(error) && <p className="flex flex-col justify-center items-center my-4 mx-auto">Error</p>}

				{(!error && !data && loading) && <p className="flex flex-col justify-center items-center my-5 mx-auto">Cargando...</p>}

				{(!error && !loading && data && data.listsByCreator.length) && <button className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer' onClick={() => setIsAddOrUpdateContentModalVisible(true)}>
					<p className='text-center font-bold overflow-hidden'>
						+ Agregar lista nueva
					</p>
				</button>}

			</div>

			{data && (data.listsByCreator) && (data.listsByCreator.length > 0) && data.listsByCreator.map((list) => {
				return <ListBox onClickBox={() => clickBoxHandleFunction(list)} key={list.id} list={list} />
			})}

			{isAddOrUpdateContentModalVisible && <AddOrUpdateContentModal isAdd={true} typeOfContent="list" onClose={() => setIsAddOrUpdateContentModalVisible(false)} userId={userid} />}
		</div>
	)
}