export default function EditProfileModal ({ onClose}) {
    return (
        <>
            <div className="flex fixed top-0 left-0 w-full h-full bg-black opacity-35 z-20" onClick={onClose}></div>
            <div className="flex flex-col md:w-7/10 w-95 h-fit justify-center items-center p-5 fixed md:left-[15%] left-[2.5%] bg-white rounded-md shadow-2xl z-50 ">
                <div className="flex flex-col w-full justify-center items-center text-center py-5">
                    <p className="text-center concert-font text-3xl">
                        Editar perfil
                    </p>
                </div>
                <div className="flex md:flex-row flex-col w-9/10 justify-center items-center">
                    <p className="w-fit md:text-left text-center">
                        Nombre
                    </p>
                    <input className="bg-gray-300 w-full md:ml-3 p-1 outline-none " />

                </div>
            </div>
        </>
    )
}