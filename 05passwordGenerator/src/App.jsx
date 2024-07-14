import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 50)
    window.navigator.clipboard.writeText(passwordRef.current.value)
    // window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (symbolAllowed) str += "!@#$%^&*()_+"

    for(let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, symbolAllowed, setPassword]) // here dependencies are used for optimization (Cached)

  useEffect(passwordGenerator, [length, numberAllowed, symbolAllowed, passwordGenerator]) // if any change in any dependency, passwordGenerator will re-run

  return (
    <>
      <div className='h-48 w-158 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 test-orange-500 bg-gray-700'>
        <div className='flex items-center justify-center text-2xl'>
            Password generator
        </div>
        <div className='flex shadow-lg overflow-hidden rounded-lg my-6'> 
          <input
            type='text'
            value={password}
            className='w-full px-5 py-2 text-gray-700 bg-gray-300'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item- center text-gray-300 gap-x-1'>
            <input
            type='range'
            value={length}
            min='8'
            max='50'
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-gray-300'>Length: {length}</label>
          </div>  
          <div className='flex items-center text-gray-300 gap-x-1'>
            <input
              type='checkbox'
              id = 'numberInput'
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label className='text-gray-300'>Numbers</label>
          </div>
          <div className='flex items-center text-gray-300 gap-x-1'>
            <input
              type='checkbox'
              id = 'symbolInput'
              defaultChecked={symbolAllowed}
              onChange={() => setSymbolAllowed(prev => !prev)}
            />
            <label className='text-gray-300'>Symbols</label>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App
