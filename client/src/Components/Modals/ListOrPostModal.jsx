import { useState } from "react";

import ListContainer from "../ListContainer";
import PostContainer from "../PostContainer";

export default function ListOrPostModal ({ content, isListModal, isPostModal, onClose }) {

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-35 z-40" onClick={onClose}></div>
            <div className='flex flex-col items-start bg-white h-[80%] shadow-2xl rounded-md md:px-12 px-5 py-8 z-50 md:w-5/10 w-95 fixed top-[12%] left-[2.5%] md:left-[25%]'>
                {isListModal && <ListContainer list={content} onClose={onClose} />}
                {isPostModal && <PostContainer post={content} onClose={onClose} />}
            </div>
        </>
    )
}