import { IoMdClose } from "react-icons/io";
import ListOfItems from "./ListOfItems";

export default function ListContainer ({ list, onClose }) {
    console.log(list)
    if (list) return (
        <>
            <div className='flex flex-col w-full justify-center'>
                <p className="text-black text-3xl concert-font text-center mb-3">
                    {list.listName}
                </p>
                <p className="text-gray-300 text-center">
                    {(list.listPrivacy === "public") ? "Lista Pública" : "Lista Privada"}
                </p>
                <p className="text-gray-300 text-center">
                    de {(list.creator.displayName)}
                </p>
                <button className="absolute top-2 right-2 text-black hover:text-gray-300 duration-200" onClick={onClose}>
                    <IoMdClose fontSize={18} />
                </button>
            </div>

            <div className="flex flex-col w-full justify-center items-center py-4 px-6">
                <p className="text-left">
                    {list.listDescription}
                </p>
            </div>
                yeah
            <ListOfItems listId={list.id} />
        </>
    )
}