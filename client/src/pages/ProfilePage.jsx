import { useState } from "react";
import AddButtonSection from "../Components/AddButtonSection";
import LargeCard from "../Components/LargeCard";
import AddOrUpdateContentModal from "../Components/Modals/AddOrUpdateContentModal";
import ListWindowModal from "../Components/Modals/ListWindowModal";
import SmallCard from "../Components/SmallCard";

export default function ProfilePage () {
    const [isListWindowModalVisible, setIsListWindowModalVisible] = useState(false);
	const [idOfList, setIdOfList] = useState(null);

	function openListWindow (listId) {
		setIdOfList(listId);
		setIsListWindowModalVisible(true);
	}

	const [isAddContentModalVisible, setIsAddContentModalVisible] = useState(false);
	const [typeOfContent, setTypeOfContent] = useState('list');

	function openAddContentModal (type) {
		setTypeOfContent(type);
		setIsAddContentModalVisible(true);
	}

	let userid = "6660935f2e128966078f032c";

    return (
        <>
            <div className='flex md:h-screen h-full w-full justify-center items-start bg-var-1 inter-font pt-24 pb-36'>
					<div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 z-100 '></div>
					<div className='flex flex-col md:flex-row justify-between items-start w-9/10 md:w-6/10 md:p-10'>
						<SmallCard userId={userid} />
						<div className='flex flex-col w-full md:w-6/10 justify-center mt-5 md:mt-0'>
							<LargeCard sendIdOfList={(listId) => openListWindow(listId)} />
							<AddButtonSection onAddList={() => openAddContentModal("list")} onAddListElement={() => openAddContentModal("item")} onAddPost={() => openAddContentModal("post")} additionalClassNames=" mt-8 " onClickAction={() => setIsAddContentModalVisible(true)} hasDisplayMenu={true} />
						</div>
					</div>
			</div>
		    {isAddContentModalVisible && <AddOrUpdateContentModal isAdd={true} typeOfContent={typeOfContent} onClose={() => setIsAddContentModalVisible(false)} userId={userid} />}
		    {isListWindowModalVisible && idOfList && <ListWindowModal listId={idOfList} onClose={() => setIsListWindowModalVisible(false)} />}
        </>
    )
}