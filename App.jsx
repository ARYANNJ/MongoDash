import Intensity from './components/Pages/Intensity.jsx'
import Likelihood from './components/Pages/Likelihood.jsx'
import Region from './components/Pages/Region.jsx'
import Relevance from './components/Pages/Relevance.jsx'
import Topic from './components/Pages/Topic.jsx'

import Navbar from './components/Navbar.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import City from './components/Pages/City.jsx'
import Country from './components/Pages/Country.jsx'
import Sidebar from './components/Sidebar.jsx'
import Layout from './components/Pages/Layout.jsx'
import './index.css'

import Mainboard from './components/Mainboard.jsx'
import Year from './components/Pages/Year.jsx'


function App() {


  return (
    <>
      
        <BrowserRouter>
        <Layout/>
        <Routes>
        <Route path="/" element={<Mainboard/>}/>	
        <Route path="/intensity" element={<Intensity/>}/>	
        <Route path="/likelihood" element={<Likelihood/>}/>	
        <Route path="/relevance" element={<Relevance/>}/>
        <Route path="/year" element={<Year/>}/>
        <Route path="/country" element={<Country/>}/>	
        <Route path="/topics" element={<Topic/>}/>	
        <Route path="/region" element={<Region/>}/>
        <Route path="/city" element={<City/>}/> 

          
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
