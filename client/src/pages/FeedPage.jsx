export default function FeedPage ({}) {
    return (
        <div className='flex md:h-screen h-full w-full justify-center items-start bg-var-1 inter-font pt-24 pb-36'>
            <div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 z-100 '></div>

            <div className='flex w-full justify-center items-start'>
                <div className="flex flex-row md:w-5/10 w-95 bg-white rounded-md shadow-2xl p-6">
                    <div className="flex w-1/10 items-start">
                        <img src="https://via.placeholder.com/150" alt="profile" className="w-full rounded-full" />
                    </div>
                    <div className="flex flex-col w-9/10 pl-4 ">
                        <div className="font-bold">
                            Título de la publicación
                        </div>
                        <div>
                            Contenido de la publicación
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}