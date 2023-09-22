import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandinPage from './components/landingpage/LandinPage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import SellerState from './context/Seller/SellerState';
import Home from './components/Home/Home';
import ProductsPage from './components/Products/ProductsPage';
import Notespage from './components/Notespage/Notespage';
import Dashboard from './components/Dashboard/Dashboard';
import NoteState from './context/Notes/NoteState';
import ProductsState from './context/Products/ProductsState';



const App = () => {
  return (
    
    <BrowserRouter>
    <SellerState>
    <NoteState>
    <ProductsState>
    <Routes>
      <Route  path='/' element = {<LandinPage/>} />
      <Route  path='/login' element = {<Login/>} />
      <Route  path='/signup' element = {<Signup/>} />
      <Route  path='/home' element = {<Home/>} />
      <Route  path='/products' element = {<ProductsPage/>} />
      <Route  path='/notes' element = {<Notespage/>} />
      <Route  path='/dashboard' element = {<Dashboard/>} />

    </Routes>
    </ProductsState>  
    </NoteState>
    </SellerState>
    </BrowserRouter>

  )
}

export default App;