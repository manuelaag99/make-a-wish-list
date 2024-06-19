export default function ListWindowModal () {
    return (
        <>
            <div className="fixed top-0 left-o w-full h-full bg-black opacity-35 z-40"></div>
            <div className='flex flex-col items-start bg-white h-7/10 shadow-2xl rounded-md px-12 py-6 z-50 md:w-7/10 w-95 absolute top-[10%] left-[2.5%] md:left-[15%]'>
                <div className='flex flex-row w-full justify-center'>
                    <p className="text-black text-3xl concert-font text-center">
                        Nombre de lista
                    </p>
                </div>

                <div className="flex flex-col w-full justify-center items-center py-6">
                    <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>

                <div className="flex flex-col w-9/10 overflow-auto">
                    <div className="flex flex-row w-full p-6 hover:bg-gray-300">
                        <div className="flex flex-col w-7/10">
                            <p className="font-bold text-left w-full">
                                Nombre de elemento
                            </p>
                            <p className="font-regular text-left w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="flex w-3/10">
                            
                        </div>
                    </div>

                    <div className="flex flex-row w-full p-6 hover:bg-gray-300">
                        <div className="flex flex-col w-7/10">
                            <p className="font-bold text-left w-full">
                                Nombre de elemento
                            </p>
                            <p className="font-regular text-left w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="flex w-3/10">
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}