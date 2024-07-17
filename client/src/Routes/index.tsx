import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home'

export default function index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Home} />

        </Routes>
    </BrowserRouter>
  )
}
