import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Project } from './components/Projects/Project';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden ">
      <BrowserRouter>
      <div className="fixed top-[0px] right-1 w-full z-30">
      <Toolbar />
      </div>
      <div className="w-full h-full mt-16 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
         </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
