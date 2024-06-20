export default function CellForListElement () {
    return (
        <div className="flex flex-row w-full p-6 hover:bg-gray-300 cursor-pointer duration-200">
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
    )
}