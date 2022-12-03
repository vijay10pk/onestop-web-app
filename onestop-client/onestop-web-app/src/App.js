import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Pages/About'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Header from './Components/shared/header'
import ac from './images/ac.png'
import carpenter from "./images/carpenter.png"
import cleaning from './images/cleaning.png'
import plumbing from './images/plumbing.png'
import salon from './images/salon.png'
import applianceRepair from './images/appliance-repair.png'
import electrical from './images/electrical.png'
import pest from './images/pest.png'
import spa from './images/spa.png'
import paint from './images/paint.png'
import { AiOutlineSearch } from 'react-icons/ai'
import Navbar from './Pages/Navbar'

const App = () => {
  return (
    <Router>
    <Navbar/>
    <div className='container'>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>  
    </Router>
  )
}

export default App