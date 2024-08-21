import TopBar from "../Components/TopBar";

export default function SearchResultsPage ({}) {
    
    return (
        <div className="flex flex-col w-full justify-center">
            <TopBar />

            <div className="flex flex-col w-full mt-44 mx-auto px-20">
                <div className="flex flex-row w-full bg-white shadow-2xl rounded-md p-4">
                    <div className="w-1/10">
                        <img src="https://via.placeholder.com/150" alt="placeholder" className=" rounded-full object-cover" />
                    </div>
                    <div className="flex w-7/10">
                        <div className="flex flex-col w-full justify-center ml-4 ">
                            <p className="my-1 text-lg font-bold">Nombre de la persona</p>
                            <p className="my-1 text-sm">Descripción de la persona</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}