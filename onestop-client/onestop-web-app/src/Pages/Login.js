import React, { Fragment, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";

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
                    <form action="">
                        <input className='form-control' type="text" placeholder='Enter Full Name' />
                        <input className='form-control' type="text" placeholder='Enter Mobile Number' />
                        <input className='form-control' type="text" placeholder='Enter Email' />
                        <input className='form-control' type="text" placeholder='Enter Password' />
                        <input className='form-control' type="text" placeholder='Confirm Password' /><br />
                        <button className='btn btn-dark' id='submit'>Sign Up</button>
                    </form>
                    </>
                ):(
                <>
                <h2>Login</h2>
                <form action="">
                    <input className='form-control' type="text" placeholder="Username" />
                    <input className='form-control' type="text" placeholder='Password' /><br />
                    <button className='btn btn-dark' id='submit'>Login</button>
                </form></>
                )}
                <button id='signup' onClick={()=> setSignup(!signUp)}>{signUp?"Have an account? Login":"Don't have an account? Sign Up"}</button>
            </div>
        </section>
    </Fragment>
  )
}

export default Login