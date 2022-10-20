import React, { Fragment, useState } from 'react'
import Login from './Login'
import Register from './Register'
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

const App = () => {

  const [login,setLogin] = useState(false)
  const [register,setRegister] = useState(false)

  const closeClick = () => {
    setLogin(!login)
  }

  const removeClick = () => {
    setRegister(!register)
  }

  const changeClick = () => {
    setRegister(!register)
    setLogin(!login)
  }

  return (
    <Fragment>
      {login && <Login closeClick={closeClick}></Login>}
      {register && <Register removeClick={removeClick} changeClick={changeClick}></Register>}
      <nav>
        <div>
          <h1>OneStop</h1>
        </div>
        <div>
          <button>About</button>
          <button onClick={() => setRegister(!register)}>Register for professional</button>
          <button onClick={() => setLogin(!login)}>Login/Sign Up</button>
        </div>
      </nav>
      <div>
        <input className="searchService" type="text" placeholder='Search for services'></input>
        {/* <svg class="searchIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg> */}
      </div>
      <section id='homepage'>
        <div>
          <img src={ac} alt="ac" />
          <p>Air Conditioning</p>
        </div>
        <div>
          <img src={carpenter} alt="carpenter" />
          <p>Carpenter</p>
          </div>
        <div>
          <img src={cleaning} alt="cleaning" />
          <p>Cleaning</p>
        </div>
        <div>
          <img src={plumbing} alt="plumbing" />
          <p>Plumbing</p>
        </div>
        <div>
          <img src={salon} alt="salon" />
          <p>Salon</p>
        </div>
        <div>
          <img src={applianceRepair} alt="carpenter" />
          <p>Appliance repair</p>
        </div>
        <div>
          <img src={paint} alt="cleaning" />
          <p>Paint</p>
        </div>
        <div>
          <img src={spa} alt="plumbing" />
          <p>Spa</p>
        </div>
        <div>
          <img src={electrical} alt="cleaning" />
          <p>Electrical</p>
        </div>
        <div>
          <img src={pest} alt="plumbing" />
          <p>Pest</p>
        </div>
      </section>
    </Fragment>
  )
}

export default App