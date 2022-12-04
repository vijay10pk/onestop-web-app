import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Pages/About'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Navbar from './Pages/Navbar'
import ServiceList from './Components/ServiceList'


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
          <Route path='/service' element={<ServiceList />}></Route>
        </Routes>
      </div>  
    </Router>
  )
}

export default App