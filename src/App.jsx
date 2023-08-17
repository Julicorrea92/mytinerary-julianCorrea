import { useState } from 'react'
import './App.css'
import Main from './layouts/Main.jsx'
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
