import { useMutation } from "@apollo/client";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GET_USER_LISTS } from "../queries/ListQueries";
import { DELETE_LIST } from "../mutations/ListMutations";
import AddOrUpdateContentModal from "./Modals/AddOrUpdateContentModal";

export default function ListBox ({ listName, listDescription, listId, listPrivacy, onClickBox }) {
	const [deleteListFromDataBase] = useMutation(DELETE_LIST, {
        variables: { id: listId },
        // refetchQueries: [{ query: GET_USER_LISTS, variables: { id: "6679ee76aca5c3f01cfc0080" } }]
		update(cache, { data: { deleteList } }) {
			const { listsByCreator } = cache.readQuery({ query: GET_USER_LISTS });
			const newListsByCreator = listsByCreator.filter((list) => list.id !== deleteList.id);
			cache.writeQuery({
				query: GET_USER_LISTS,
				data: { listsByCreator: newListsByCreator }
			});
		}
    });

	function onDeleteList () {
		deleteListFromDataBase();
	}

	function onUpdateList () {
		setIsAddContentModalVisible(true);
	}

	function onClickThreeDots () {
		setAreThreeDotsClicked((prev) => (!prev));
	}

	const [areThreeDotsClicked, setAreThreeDotsClicked] = useState(false);
	
	const [isAddContentModalVisible, setIsAddContentModalVisible] = useState(false);

    return (
		<>
			<div className="flex flex-row w-full px-6 cursor-pointer bg-white hover:bg-gray-300 duration-200 relative" >
				<div className="flex flex-col w-9/10 py-4 pr-3" onClick={onClickBox}>
					<div>
						<p className="text-left text-black font-bold overflow-hidden">
							{listName}
						</p>
					</div>
					<div>
						<p className="text-left text-black overflow-hidden">
							{listDescription}
						</p>
					</div>
					<div>
						{(listPrivacy === "private") && <p className="text-left text-gray-500 overflow-hidden">
							Lista Privada
						</p>}
						{(listPrivacy === "public") && <p className="text-left text-gray-500 overflow-hidden">
							Lista Publica
						</p>}
					</div>
				</div>
				<div className="flex w-1/10 justify-center items-center text-black hover:text-white" onClick={onClickThreeDots}>
					<button className="flex w-full justify-center items-center ">
						<BsThreeDotsVertical />
					</button>
				</div>
				{areThreeDotsClicked && <div className="absolute flex flex-col bg-white w-24 h-fit right-0 top-[60%] shadow-2xl z-20">
					<div className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-300 text-center " onClick={onUpdateList}>
						Editar
					</div>
					<button className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-300 text-center " onClick={onDeleteList}>
						Borrar
					</button>
				</div>}
			</div>
			{isAddContentModalVisible && <AddOrUpdateContentModal isAdd={false} typeOfContent="list" onClose={() => setIsAddContentModalVisible(false)} />}
		</>
    )
}