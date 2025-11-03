import { useState } from 'react'
import './App.css'
import LayOut from './components/LayOut/LayOut'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Exit10 from './components/Exit10/Exit10'
import RedSeaAmaalaMarina from './components/RedSeaAmaalaMarina/RedSeaAmaalaMarina'
import RedSeaAirport from './components/RedSeaAirport/RedSeaAirport'
import NavisworksAddin from './components/NavisworksAddin/NavisworksAddin'
import GrasshopperScripts from './components/GrasshopperScripts/GrasshopperScripts'
import QiddyaEntertainmentFacadeProject from './components/QiddyaEntertainmentFacadeProject/QiddyaEntertainmentFacadeProject'
import TitanTurtlePackage from './components/TitanTurtlePackage/TitanTurtlePackage'
import ZoodTowersProject from './components/ZoodTowersProject/ZoodTowersProject'

function App() {



  const routing = createBrowserRouter([
    {
      path: '', element: <LayOut />, children: [


        { path: 'KhaledSaiedPortfolio', element: <Home /> },
        { path: '/bimProjects/exit10', element: <Exit10 /> },
        { path: '/bimProjects/rsAmaalaMarina', element: <RedSeaAmaalaMarina /> },
        { path: '/computationalProjects/qiddyaEntertainmentFacade', element: <QiddyaEntertainmentFacadeProject /> },
        { path: '/computationalProjects/zoodTowers', element: <ZoodTowersProject /> },
        { path: '/bimProjects/rsAirport', element: <RedSeaAirport /> },
        { path: '/bimDevelopments/navisworksAddin', element: <NavisworksAddin /> },
        { path: '/bimDevelopments/titanTurtlePackage', element: <TitanTurtlePackage /> },
        { path: '/computationalDesign/grasshopperScripts', element: <GrasshopperScripts /> },

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
