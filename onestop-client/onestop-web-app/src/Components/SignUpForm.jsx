import React, { useState } from "react";
import axios from "axios";
import { FaUser } from 'react-icons/fa'
import Card from "./shared/Card";

function SignUpForm() {
    // const navigate = useNavigate();
  const [formData,setFormData]=useState({
    userName:"",
    mobileNumber: "",
    email:"",
    password: "",
    password2: ""

  });
  const { userName, email, mobileNumber, password, password2 } = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) =>{
    e.preventDefault();
    if (password !== password2) {
      console.log("Password mismatch")
    } else {
      const userData = {
        userName,
        mobileNumber,
        email,
        password,
      }
    try{
      const res= await axios.post("http://localhost:8000/api/users",userData);
      alert(res.data.message);
    //   navigate("/login")
    }catch(error){
      alert(error.response.data.message);
    }
  }

  return (
    <>
    <Card>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='userName'
              name='userName'
              value={userName}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='mobileNumber'
              className='form-control'
              id='mobileNumber'
              name='mobileNumber'
              value={mobileNumber}
              placeholder='Enter your mobile number'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn2 btn2-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
      </Card>
    </>
  );
}
}
export default SignUpForm;
