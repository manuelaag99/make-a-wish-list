import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ListBox ({ listName, listDescription, listPrivacy, onClickBox }) {

	function onClickThreeDots () {
		setAreThreeDotsClicked((prev) => (!prev));
	}

	const [areThreeDotsClicked, setAreThreeDotsClicked] = useState(false);

    return (
		<>
			<div className="flex flex-row w-full px-7 cursor-pointer bg-white hover:bg-gray-300 duration-200 relative" >
				<div className="flex flex-col w-9/10 py-4" onClick={onClickBox}>
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
						<p className="text-left text-gray-500 overflow-hidden">
							{listPrivacy}
						</p>
					</div>
				</div>
				<div className="flex w-1/10 justify-center items-center" onClick={onClickThreeDots}>
					<button className="flex w-full justify-center items-center text-black hover:text-white">
						<BsThreeDotsVertical />
					</button>
				</div>
				{areThreeDotsClicked && <div className="absolute flex flex-col bg-white w-24 h-fit right-0 top-[60%] shadow-2xl z-20">
					<div className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-300 text-center ">
						Editar
					</div>
					<div className="flex justify-center items-center w-full p-1 bg-white hover:bg-gray-300 text-center ">
						Borrar
					</div>
				</div>}
			</div>
		</>
    )
}