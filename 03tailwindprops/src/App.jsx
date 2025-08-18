import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : 'vaishnavi',
    age: 20
  }
let myArry = [1,2.34];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chai aur code" btnText="click me" />
      <Card username="vaishnavi"/>

      
    </>
  )
}

export default App
