
import React from 'react'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from './DashboardPage';
import Otherpage from './Otherpage';


const Hero = () => {
  return (
    <div className=' w-full h-11/12 flex ' >
      <Sidebar  />
       <Routes>
        <Route path="/" element={ <DashboardPage />} />
        <Route path="/1" element={<Otherpage /> } />
       </Routes>
     
    </div>
  )
}

export default Hero