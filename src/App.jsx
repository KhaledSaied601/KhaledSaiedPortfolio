import { useState } from 'react'
import './App.css'
import LayOut from './components/LayOut/LayOut'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Exit10 from './components/Exit10/Exit10'
import RedSeaAmaalaMarina from './components/RedSeaAmaalaMarina/RedSeaAmaalaMarina'
import RedSeaAirport from './components/RedSeaAirport/RedSeaAirport'
import NavisworksAddin from './components/NavisworksAddin/NavisworksAddin'

function App() {



  const routing = createBrowserRouter([
    {
      path: '', element: <LayOut />, children: [


        { path: 'KhaledSaiedPortfolio', element: <Home /> },
        { path: '/bimProjects/exit10', element: <Exit10 /> },
        { path: '/bimProjects/rsAmaalaMarina', element: <RedSeaAmaalaMarina /> },
        { path: '/bimProjects/rsAirport', element: <RedSeaAirport /> },
        { path: '/bimDevelopments/navisworksAddin', element: <NavisworksAddin /> },

      ]
    }
  ])





  return (
    <>
      <RouterProvider router={routing}>
        
        <LayOut />

      </RouterProvider>

    </>
  )
}

export default App
