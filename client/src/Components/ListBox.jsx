import { useMutation } from "@apollo/client";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GET_USER_LISTS } from "../queries/ListQueries";
import { DELETE_LIST } from "../mutations/ListMutations";
import AddOrUpdateContentModal from "./Modals/AddOrUpdateContentModal";

export default function ListBox ({ list, onClickBox }) {
	const [deleteListFromDataBase] = useMutation(DELETE_LIST, {
        variables: { id: list.id },
        refetchQueries: [{ query: GET_USER_LISTS }]
    });

	console.log(list);

	function onDeleteList () {
		deleteListFromDataBase();
	}

	const [isAddOrUpdateContentModalVisible, setIsAddOrUpdateContentModalVisible] = useState(false);
	const [listToUpdate, setListToUpdate] = useState(null);
	function onUpdateList () {
		setListToUpdate(list);
		setIsAddOrUpdateContentModalVisible(true);
	}

	function onClickThreeDots () {
		setAreThreeDotsClicked((prev) => (!prev));
	}

	const [areThreeDotsClicked, setAreThreeDotsClicked] = useState(false);

    return (
		<>
			<div className="flex flex-row w-full px-6 cursor-pointer bg-white hover:bg-gray-300 duration-200 relative" >
				<div className="flex flex-col w-9/10 py-4 pr-3" onClick={onClickBox}>
					<div>
						<p className="text-left text-black font-bold overflow-hidden">
							{list.listName}
						</p>
					</div>
					<div>
						<p className="text-left text-black overflow-hidden">
							{list.listDescription}
						</p>
					</div>
					<div>
						{(list.listPrivacy === "private") && <p className="text-left text-gray-500 overflow-hidden">
							Lista Privada
						</p>}
						{(list.listPrivacy === "public") && <p className="text-left text-gray-500 overflow-hidden">
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
					<div className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-400 text-center " onClick={onUpdateList}>
						Editar
					</div>
					<button className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-400 text-center " onClick={onDeleteList}>
						Borrar
					</button>
				</div>}
			</div>

			{isAddOrUpdateContentModalVisible && <AddOrUpdateContentModal contentToUpdate={listToUpdate} isAdd={false} typeOfContent="list" onClose={() => setIsAddOrUpdateContentModalVisible(false)} />}
		</>
    )
}