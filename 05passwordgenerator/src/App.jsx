import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumbAllowed] = useState(false)
  const [charcetrAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if(charcetrAllowed) str += "!@#$&*_+=[]{}~`"

    for (let i = 1; i <= length; i++){
      let char =Math.floor (Math.random()*str.length + 1)

      pass += str.charAt(char)

    }     
    setPassword(pass)
    

  }, [length, numberAllowed, charcetrAllowed])

  const copyPaswordtoClipboard = useCallback(()=> {
    copyToClipboard.current?.select();
    copyToClipboard.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
    
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charcetrAllowed, passwordGenerator])

  //Ref hook 

  const copyToClipboard = useRef(null)

  return (
    <>
    <div className='w-full max-w-md mx-auto 
    shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow overflow-hidden mb-4 bg-white rounded-lg text-gray-800">
      <input type='text' value={password} 
       className='outline-none w-full py-1 px-5 ' 
       placeholder='Password' readOnly ref={copyToClipboard}
        />
        <button onClick={copyPaswordtoClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 
        zoom-75 transition-all duration-200 text-bold rounded-r-lg zoom-in-hover '>
        copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gapx-1'>
          <input type='checkbox' 
          defaultChecked = {numberAllowed}
          id='numberAllowed'
          onChange={() => {setNumbAllowed((prev) => !prev)}}
          className='curser-pointer'
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={charcetrAllowed}
          onChange={() => {setCharAllowed((prev) => !prev)}}
          className='cursor-pointer'/>
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
