import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Pages/About'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    
  )
}

export default App