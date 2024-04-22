import './App.css'

export default function App() {
  return (
    <div className='flex w-screen h-screen justify-center items-center bg-var-1'>
      <div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 '></div>
      <div className='flex flex-row justify-between w-6/10 h-fit p-10'>
        <div className='flex flex-col w-3/10 bg-white h-fit p-10 shadow-2xl rounded-md'>

        </div>
        <div className='flex flex-col w-6/10 bg-white h-fit shadow-2xl rounded-md'>
          <div className='flex flex-row w-full justify-center'>
            <button className='flex w-1/2 h-fit py-4 justify-center'>
              <p className='text-center'>
                Publicaciones
              </p>
            </button>
            <button className='flex w-1/2 h-fit py-4 justify-center'>
              <p className='text-center'>
                Listas
              </p>
            </button>
          </div>
          <div className='flex flex-col w-full'>

          </div>
          <div className='flex flex-col w-full'>

          </div>
        </div>
      </div>
    </div>
  )
}