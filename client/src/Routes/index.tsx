import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../Components/Navbar/Navbar'

export default function index() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' Component={Home} />

        </Routes>
    </BrowserRouter>
  )
}
