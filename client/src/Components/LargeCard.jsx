export default function LargeCard ({}) {
    return (
        <div className='flex flex-col w-6/10 bg-white h-fit shadow-2xl rounded-md pb-8'>
          <div className='flex flex-row w-full justify-center'>
            <button className='flex w-1/2 bg-white hover:bg-gray-300 duration-200 h-fit py-4 justify-center'>
              <p className='text-center font-bold'>
                Publicaciones
              </p>
            </button>
            <button className='flex w-1/2 bg-white hover:bg-gray-300 duration-200 h-fit py-4 justify-center'>
              <p className='text-center font-bold'>
                Listas
              </p>
            </button>
          </div>
          <div className='flex flex-row w-full justify-center'>
            <div className='w-full h-0.5 bg-black'></div>
            <div className='w-full h-0.5 bg-black'></div>
          </div>
          <div className='flex flex-col w-full rounded-none'>
            <button className='flex w-full justify-center items-center bg-white hover:bg-gray-300 duration-200 rounded-none py-4'>
              <p className='text-center font-bold'>
                + Agregar lista nueva
              </p>
            </button>
          </div>
          <div className='flex flex-col w-full'>

          </div>
        </div>
    )
}