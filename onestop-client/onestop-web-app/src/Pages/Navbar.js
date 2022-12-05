import React, { Fragment } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login')
  }

  return (
    <Fragment>
      <nav>
        <div>
          <Link to='/' ><button id='onestop' >OneStop</button></Link>
        </div>
        {localStorage.getItem('login') ? (
          <div>
            <Link to='/cart' ><button><FaShoppingCart style={{ fontSize: "25px" }} ></FaShoppingCart></button></Link>
            <button>WELCOME  {localStorage.getItem('login').toUpperCase()}</button>
            <button onClick={handleLogout} >LOGOUT</button>
          </div>) : (
          <div>
            <Link to='/cart' ><button><FaShoppingCart style={{ fontSize: "25px" }} ></FaShoppingCart></button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/register'><button>Register for professional</button></Link>
            <Link to='/login'><button>Login/Sign Up</button></Link>
          </div>
        )}
      </nav>
    </Fragment>
  )
}

export default Navbar