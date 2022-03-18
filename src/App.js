import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gps from './pages/Gps';
import Home from './pages/Home';
import UploadFile from './pages/UploadFile';
import NavigatorBottom from './utils/NavigatorBottom';



function App() {

  return (
    <BrowserRouter>
      <NavigatorBottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/gps" element={<Gps />} />
      </Routes>
    </BrowserRouter>


  )

}

export default App;

