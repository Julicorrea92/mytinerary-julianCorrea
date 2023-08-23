import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layouts/MainLayout.jsx'
import Index from './pages/index.jsx'
import Cities from './pages/Cities.jsx'
import Component404 from './components/Component404'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Main/>,
    children:[
      {
        path:'/', 
      element:<Index/>
    },
      {
        path:'/cities', 
      element:<Cities/>
    },
      {
        path:'cities/:id',
    element:<Cities/>
  },
      {
        path:'*',
    element:<Component404/>
  }
    ]
  },
  {
    
  }
  

])



function App() {


  return (
      <>
        <RouterProvider router={router}/>


      </>
      
  )
}

export default App
