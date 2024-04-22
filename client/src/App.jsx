import './App.css'
import LargeCard from './Components/LargeCard'
import SmallCard from './Components/SmallCard'

export default function App() {
  return (
    <div className='flex w-screen h-screen justify-center items-center bg-var-1'>
      <div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 '></div>
      <div className='flex flex-row justify-between w-6/10 h-fit p-10'>
        <SmallCard />
        <div className='flex flex-col w-6/10 justify-center'>
          <LargeCard />
          <div className='flex justify-center w-full bg-var-2 hover:bg-var-2-hovered h-fit py-3 cursor-pointer rounded-md shadow-2xl'>
            <p className='text-center text-white font-bold concert-font'>
              Agregar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}