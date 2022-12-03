import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import Card from '../Components/shared/Card'
import SignUpForm from '../Components/SignUpForm'
import LoginForm from '../Components/LoginForm'

const Login= ()=> {
  
  // const [signUp,setSignup] = useState(false)


  return (
    <>
      {/* {signUp ? (
                    <>
                    <SignUpForm/>
                    </>
                ):(
                  <>
                  <LoginForm/>
                  </>
                )}
                <button id='signup' onClick={()=> setSignup(!signUp)}>{signUp?"Have an account? Login":"Don't have an account? Sign Up"}</button> */}
                <LoginForm/>
    </>
  )
}

export default Login