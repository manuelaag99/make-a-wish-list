export default function SmallCard ({}) {
    return (
        <div className='flex flex-col w-35 justify-center items-start bg-white h-fit p-10 shadow-2xl rounded-md'>
            <div className="flex w-full aspect-square">
                <img className="w-full" src="" alt="" />
            </div>
            <div className="flex flex-col w-full my-4">
                <div className="flex w-full">
                    <p className="text-left text-black font-bold">
                        Nombre de usuario
                    </p>
                </div>
                <div className="flex w-full">
                    <p className="text-left text-black">
                        Biografía
                    </p>
                </div>
            </div>
        </div>
    )
}