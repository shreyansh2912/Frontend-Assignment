import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Nav from './Nav'
import { BrowserRouter, Link, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Module1 from './Module1'
import Module2 from './Module2'
import Count from './Count'
import Bill from './Bill'
import Module3 from './Module3';
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Nav/>   
        <Routes>
          <Route path='Module1' element={<Module1/>}></Route>
          <Route path='Module2' element={<Module2/>}></Route>
          <Route path='Module3' element={<Module3/>}></Route>
          {/* <Route path='Module1' element={<Module1/>}></Route> */}
        </Routes>
      </BrowserRouter>
      {/* <Bill/> */}
    </div>
  )
}

export default App
