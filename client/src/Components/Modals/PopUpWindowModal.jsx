import ActionButton from "../ActionButton";
import { IoMdClose } from "react-icons/io";

export default function PopUpWindowModal ({ onButtonClick, onClose, textForActionButtonInPopUpWindowModal, textForPopUp, typeOfContent }) {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-35 z-40" onClick={onClose}></div>
            <div className="flex flex-col justify-center md:w-4/10 w-95 h-fit md:px-14 px-3 bg-white fixed top-[30%] left-[2.5%] md:left-[30%] z-70 rounded-md shadow-2xl">
                <div className="flex justify-center items-center w-full md:mt-8 mt-5 mb-2 ">
                    <p className="text-black text-center">{textForPopUp}</p>
                </div>
                <button className="absolute top-4 right-4 md:top-2 md:right-2 text-black hover:text-gray-300 duration-200" onClick={onClose}>
                    <IoMdClose fontSize={18} />
                </button>

                <ActionButton additionalClassNames=" md:my-8 my-5 disabled:bg-var-2-disabled  bg-var-2 hover:bg-var-2-hovered " isButtonDisabled={false} onClickButtonFunction={onButtonClick} textForActionButton={textForActionButtonInPopUpWindowModal} />
            </div>
        </div>
    )
}