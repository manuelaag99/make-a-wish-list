export default function PostContainer ({}) {
    return (
        <div className="flex flex-row md:w-5/10 w-95 bg-white rounded-md shadow-2xl p-6 my-5 mx-auto">
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
    )
}