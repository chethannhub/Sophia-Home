import { useState } from 'react'
import Home from './Components/Home'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Home/>
          {/* <Outlet /> */}
        </>
      )
    }
  ]);
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
