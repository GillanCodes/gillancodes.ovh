import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import Auth from '../Pages/Auth'

export default function index() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/auth' Component={Auth} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
