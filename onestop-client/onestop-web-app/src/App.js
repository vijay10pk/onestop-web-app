import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Pages/About'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Navbar from './Pages/Navbar'
import ServiceList from './Components/ServiceList'
import SubCategory from './Components/SubCategory'
import ServiceDetail from './Components/ServiceDetail'
import Cart from './Components/Cart'
import SearchBar from './Components/SearchBar'
import Checkout from './Components/Checkout'
import Success from './Components/Success'

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
          <Route path='/detail' element={<ServiceDetail />}></Route>
          <Route path='/search' element={<SearchBar/>} />
          <Route path='/sub' element={<SubCategory />} ></Route>
          <Route path='cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout></Checkout>} />
          <Route path='/success' element={<Success></Success>} />
        </Routes>
      </div>  
    </Router>
  )
}

export default App