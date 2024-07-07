import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AddOrUpdateContentModal from "./Modals/AddOrUpdateContentModal";
import { useState } from "react";

export default function CellForListOfItemsToUpdate ({ listItem }) {
    let userid = "6660935f2e128966078f032c";

    console.log(listItem)

    const [isAddOrUpdateContentModalVisible, setIsAddOrUpdateContentModalVisible] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row w-full bg-white hover:bg-gray-300 duration-200 cursor-pointer py-1 px-1">
            <div className="flex flex-row w-full sm:w-8/10 my-2 sm:my-0 h-24  ">
                <div className="flex justify-center h-full w-1/4 px-3 py-1 object-contain">
                    <img className=" object-fit aspect-auto " src={listItem.itemPhotoUrl} />
                </div>
                <div className="flex flex-col w-6/10 text-black justify-center text-left whitespace-nowrap overflow-hidden ml-2 ">
                    <div className="flex w-full font-bold">
                        <p className="">
                            {listItem.itemName}
                        </p>
                    </div>
                    <div className="flex w-full font-normal">
                        <p className="">
                            {listItem.itemDescription}
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row w-full sm:w-2/10 items-center justify-center my-2 sm:my-0 ">
                <button className="flex w-1/2 py-1 justify-center items-center text-black hover:text-white duration-200" onClick={() => setIsAddOrUpdateContentModalVisible(true)}>
                    <MdEdit fontSize={20} />
                </button>
                <button className="flex w-1/2 py-1 justify-center items-center text-black hover:text-white duration-200">
                    <MdDelete fontSize={20} />
                </button>
            </div>
            
            {isAddOrUpdateContentModalVisible && <AddOrUpdateContentModal contentToUpdate={listItem} isAdd={false} listItem={listItem} onClose={() => setIsAddOrUpdateContentModalVisible(false)} typeOfContent="item" userId={userid} />}
        </div>
    )
}