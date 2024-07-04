import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function CellForListOfElementsToUpdate ({}) {
    return (
        <div className="flex flex-col sm:flex-row w-full bg-white hover:bg-gray-300 duration-200 cursor-pointer py-1 px-1">
            <div className="flex flex-row w-full sm:w-8/10 my-2 sm:my-0 ">
                <div className="flex w-1/4 px-2 py-1 ">
                    <img src="" />
                </div>
                <div className="flex flex-col w-3/4 text-black text-left whitespace-nowrap overflow-hidden ">
                    <div className="flex w-full font-bold">
                        <p className="">
                            Nombre de elemento
                        </p>
                    </div>
                    <div className="flex w-full font-normal">
                        <p className="">
                            Descripcion de elemento
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row w-full sm:w-2/10 items-center justify-center my-2 sm:my-0 ">
                <button className="flex w-1/2 py-1 justify-center items-center text-black hover:text-white duration-200">
                    <MdEdit fontSize={20} />
                </button>
                <button className="flex w-1/2 py-1 justify-center items-center text-black hover:text-white duration-200">
                    <MdDelete fontSize={20} />
                </button>
            </div>
            
        </div>
    )
}