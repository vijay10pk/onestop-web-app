import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Fragment>
          <nav>
              <div>
                  <Link to='/' ><button id='onestop' >OneStop</button></Link>
              </div>
              <div>
                  <Link to='/about'><button>About</button></Link>
                  <Link to='/register'><button>Register for professional</button></Link>
                  <Link to='/login'><button>Login/Sign Up</button></Link>
              </div>
          </nav>
    </Fragment>
  )
}

export default Navbar