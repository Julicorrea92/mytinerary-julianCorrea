import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './layouts/MainLayout/Main.jsx'
import Index from './pages/index/index.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Main>
        <Index />
      </Main>
      </>
      
  )
}

export default App
