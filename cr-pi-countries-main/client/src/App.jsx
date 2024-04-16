import React from 'react';
import {Routes,Route} from "react-router-dom";  

import './App.css'

import Landing from "./pages/LandingPage/Landing.jsx";
import Home from './pages/HomePage/Home.jsx';
import Detail from "./pages/DetailPage/Detail.jsx";
import Create from './pages/create/create.component.jsx'
import Activities from './pages/activities/activities.component.jsx';




function App() {
  return (

      <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<Create />} />
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/activities' element={<Activities/>}/>
            
          </Routes>
      </div>
  )
}
export default App
