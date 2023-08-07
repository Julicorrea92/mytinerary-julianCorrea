import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-blue-500 min-h-screen flex flex-col'>
      <NavBar />
    
    </div>
  )
}

export default App
