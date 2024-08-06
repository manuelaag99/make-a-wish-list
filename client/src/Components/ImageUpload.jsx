import { useEffect, useRef, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { MdUpload } from "react-icons/md";

export default function ImageUpload ({ existingSource, sendFile }) {
    const imageSelectorRef = useRef();
    const [file, setFile] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!existingSource) {
            if (!file) return;
            const fileReader = new FileReader();
            fileReader.onload = () => setPreview(fileReader.result);
            fileReader.readAsDataURL(file);
            sendFile(file);   
        }
    }, [file])

    function cancelImageUpload () {
        if (file) {
            setFile();
            setPreview();
        } else {
            setPreview();
        }
    }

    function uploadImage (e) {
        console.log(e.target.files)
        setPreview(e.target.files[0])
        setFile(e.target.files[0]);
    }

    function selectFileHandler (e) {
        imageSelectorRef.current.click(e);
    }

    return (
        <div className="flex w-8/10 justify-center items-center aspect-square relative">
            {!preview && <div onClick={(e) => selectFileHandler(e)} className="flex flex-col w-full justify-center items-center aspect-square px-6 py-6 bg-gray-300 hover:bg-gray-400 duration-200 cursor-pointer rounded-md">
                <LuImagePlus fontSize={20} />
                <input className="hidden" onChange={(e) => uploadImage(e)} ref={imageSelectorRef} type="file" />
                <button className="mt-1">Upload</button>
            </div>}
            {preview && <img className="w-full h-full object-cover shadow-md" src={preview || existingSource} alt="profile" />}
            {preview && <div className="absolute top-4 right-4 md:top-2 md:right-2 text-black hover:text-gray-300 duration-200" onClick={cancelImageUpload}>
                <button className="p-0.5 rounded-2xl bg-black hover:bg-gray-500 text-white hover:text-gray-300 duration-200 mr-1">
                    <MdUpload fontSize={22} />
                </button>
                <button className="p-0.5 rounded-2xl bg-black hover:bg-gray-500 text-white hover:text-gray-300 duration-200">
                    <IoMdClose fontSize={22} />
                </button>
            </div>}
        </div>
    )
}