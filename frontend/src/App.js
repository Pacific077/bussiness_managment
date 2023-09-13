import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandinPage from './components/landingpage/LandinPage';
import Login from './components/login/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element = {<LandinPage/>} />
      <Route  path='/login' element = {<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;