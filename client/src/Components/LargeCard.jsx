export default function LargeCard ({}) {
    return (
        <div className='flex flex-col w-full bg-white h-fit shadow-2xl rounded-md pb-8 '>
          <div className='flex flex-row w-full justify-center'>
            <div className='flex w-1/2 bg-white hover:bg-gray-300 duration-200 h-fit py-4 justify-center rounded-tl-md cursor-pointer'>
              <p className='text-center font-bold concert-font'>
                Publicaciones
              </p>
            </div>
            <div className='flex w-1/2 bg-white hover:bg-gray-300 duration-200 h-fit py-4 justify-center rounded-tr-md cursor-pointer'>
              <p className='text-center font-bold concert-font'>
                Listas
              </p>
            </div>
          </div>
          <div className='flex flex-row w-full justify-center'>
            <div className='w-full h-0.5 bg-black'></div>
            <div className='w-full h-0.5 bg-black'></div>
          </div>
          <div className='flex flex-col w-full rounded-none'>
            <div className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4 cursor-pointer'>
              <p className='text-center font-bold'>
                + Agregar lista nueva
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            
            <div className="flex flex-row w-full px-7 cursor-pointer bg-white hover:bg-gray-300">
                <div className="flex flex-col w-9/10 py-4">
                    <div>
                        <p className="text-left text-black font-bold">
                            Nombre de lista
                        </p>
                    </div>
                    <div>
                        <p className="text-left text-black">
                            Descripción de lista
                        </p>
                    </div>
                    <div>
                        <p className="text-left text-gray-500">
                            Privacidad de lista
                        </p>
                    </div>
                </div>
                <div className="flex w-1/10">

                </div>
            
            </div>
          </div>
        </div>
    )
}