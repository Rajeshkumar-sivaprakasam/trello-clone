import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import './index.scss'


export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}
