import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let myObj = {
  name: 'raj',
  age: 22,
}

let myArr = [1, 2, 3, 4, 5]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 mb-4 w-[300px] rounded-xl'>Tailwind test</h1>
      <Card userName='raj' btnText='hello'/>
      <Card btnText='bye'/>
      <Card someObj={myObj} someArr={myArr}/>
    </>
  )
}

export default App
