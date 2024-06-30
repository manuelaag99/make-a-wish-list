import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function ListOfElements ({}) {
    return (
        <div className="flex flex-col w-full justify-start overflow-auto max-h-28 mt-3">

            <div className="flex flex-row w-full bg-white hover:bg-gray-300 duration-200 cursor-pointer py-1 px-1">
                        <div className="flex w-2/10 px-2 py-1 ">
                    <img src="" />
                </div>
                <div className="flex flex-col w-6/10 text-black text-left ">
                    <div className="flex w-full font-bold">
                        Nombre de elemento
                    </div>
                    <div className="flex w-full font-normal">
                        Descripcion de elemento
                    </div>
                </div>
                <button className="flex w-1/10 justify-center items-center text-black hover:text-white duration-200">
                    <MdEdit fontSize={20} />
                </button>
                <button className="flex w-1/10 justify-center items-center text-black hover:text-white duration-200">
                    <MdDelete fontSize={20} />
                </button>
            </div>

        </div>
    )
}