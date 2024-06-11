import AddButtonSection from "../AddButtonSection";

export default function AddContentModal ({}) {
    return (
        <div>
            <div className="fixed top-0 left-o w-full h-full bg-black opacity-35 z-20"></div>
            <div className="flex flex-col w-6/10 h-fit px-14 bg-white absolute top-[25%] left-[20%] z-30">
                <div className="flex justify-center items-center w-full my-8">
                    <p className="text-black text-2xl font-bold">Agregar contenido</p>
                </div>
                <div className="flex flex-row w-full my-2 items-center">
                    <p className="text-black mr-2 w-fit whitespace-nowrap">Nombre de la lista: </p>
                    <input className="bg-gray-300 px-2 py-1 w-full" type="text" placeholder="Título" />
                </div>
                <div className="flex flex-row w-full my-2 items-center">
                    <p className="text-black mr-2 w-fit whitespace-nowrap">Descripcion de la lista: </p>
                    <input className="bg-gray-300 px-2 py-1 w-full" type="text" placeholder="Título" />
                </div>
                <div className="flex flex-row w-full my-2 items-center py-1">
                    <p className="text-black mr-2 w-fit whitespace-nowrap">Privacidad de la lista: </p>
                    <input className="mx-2" name="privacy" id="public" type="radio" placeholder="Título" />
                    <label htmlFor="private" >Publico</label>
                    <input className="mx-2" name="privacy" id="private" type="radio" placeholder="Título" />
                    <label htmlFor="private" >Privado</label>
                </div>
                
                <AddButtonSection additionalClassNames=" my-10" hasDisplayMenu={false} />
                
            </div>
        </div>
    )
}