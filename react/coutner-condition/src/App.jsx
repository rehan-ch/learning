import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = ()=>{
    if (count === 20) return;
    setCount(count + 1)
  }
  const decrement = ()=>{
    if (count === 0) return;
    setCount(count - 1)
  }
  return (
    <>
    <h1>{count}</h1>
      <button onClick={()=> increment()}>Inc</button>
      <button onClick={()=> decrement()}>Dec</button>

    </>
  )
}

export default App
