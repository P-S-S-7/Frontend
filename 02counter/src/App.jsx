import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
    // setCounter returns a callback which gives the previous value of the state
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const subValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br/>
      <button onClick={subValue}>Subtract Value: {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
