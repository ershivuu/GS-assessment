import React from 'react';

import About from "./pages/About";
import Home from "./pages/Home";
import NewHome from './pages/NewHome';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Controls from './pages/Controls';
import Sidenav from './Sidenav';

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" excat element={<NewHome />} />
          <Route path="/about" excat element={<About />} />
          <Route path="/about" excat element={<Controls />} />
    
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
