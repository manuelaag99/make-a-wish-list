import './App.css'
import LargeCard from './Components/LargeCard'
import SmallCard from './Components/SmallCard'

export default function App() {
  return (
    <div className='flex w-screen h-screen justify-center items-center bg-var-1'>
      <div className='flex w-full fixed bg-var-2 shadow-2xl h-20 top-0 '></div>
      <div className='flex flex-row justify-between w-6/10 h-fit p-10'>
        <SmallCard />
        <LargeCard />
      </div>
    </div>
  )
}