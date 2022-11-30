import React, { Fragment, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import LoginForm from '../Components/LoginForm';
import SignUpForm from '../Components/SignUpForm';

const Login = ({closeClick}) => {

  const [signUp,setSignup] = useState(false)
  
  
  return (
    <Fragment>
        <section id='login'>
            <button id='icon' onClick={closeClick}><AiOutlineClose></AiOutlineClose></button>
            <div id='form'>
                {signUp ? (
                    <>
                    <h2>{signUp?"Sign Up":"Login"}</h2>
                    <SignUpForm/>
                    </>
                ):(
                <>
                <h2>Login</h2>
                <LoginForm/>
                </>
                )}
                <button id='signup' onClick={()=> setSignup(!signUp)}>{signUp?"Have an account? Login":"Don't have an account? Sign Up"}</button>
            </div>
        </section>
    </Fragment>
  )
}

export default Login