import React, { Fragment, useState } from 'react'
import Login from './Login'
import Register from './Register'
import ac from '../images/ac.png'
import carpenter from '../images/appliance-repair.png'
import cleaning from '../images/cleaning.png'
import plumbing from '../images/plumbing.png'
import salon from '../images/salon.png'
import applianceRepair from '../images/appliance-repair.png'
import electrical from '../images/electrical.png'
import pest from '../images/pest.png'
import spa from '../images/spa.png'
import paint from '../images/paint.png'
import { AiOutlineSearch } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import ServiceList from '../Components/ServiceList'

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
      <ServiceList/>
    </Fragment>
  )
}

export default App