import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandinPage from './components/landingpage/LandinPage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element = {<LandinPage/>} />
      <Route  path='/login' element = {<Login/>} />
      <Route  path='/signup' element = {<Signup/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;