import React, { useState } from 'react'
import axios from "axios";
import { FaUser } from 'react-icons/fa'
import Card from '../Components/Card';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData,setFormData]=useState({
        userName:"",
        mobileNumber: "",
        email:"",
        password: "",
        password2: "",
        address: "",
        serviceOffered: "",
    
      });
      const { userName, email, mobileNumber, password, password2, address, serviceOffered } = formData
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
            address,
            serviceOffered
          }
        try{
          const res= await axios.post("http://localhost:8000/api/users",userData);
          alert(res.data.message);
        //   navigate("/login")
        }catch(error){
          alert(error.response.data.message);
        }
      }
    }

    let serviceList = [
        {label: "Air Conditioning", value: "air conditioning"},
        {label: "Carpenter", value: "carpenter"},
        {label: "Cleaning", value: "cleaning"},
        {label: "Plumbing", value: "plumbing"},
        {label: "Salon", value: "salon"},
        {label: "Appliance Repair", value: "Appliance Repair"},
        {label: "Paint", value: "paint"},
        {label: "Spa", value: "spa"},
        {label: "Electrical", value: "electrical"},
        {label: "Pest", value: "pest"}
    ]
    
      return (
        <>
        <Card>
          <section className='heading'>
            <h1>
              <FaUser /> Register as professional
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
                <input
                  type='text'
                  className='form-control'
                  id='address'
                  name='address'
                  value={address}
                  placeholder='Enter your address'
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <select className='form-control' onChange={onChange} name="form">
                    <option value="Service you offer">Select a service</option>
                    {serviceList.map((services)=> <option value={services.value} key={serviceList.label}>{services.label}</option>)}
                </select>
              </div>
              <div className='form-group'>
                <button type='submit' className='btn2 btn2-block'>
                  Submit
                </button>
              </div>
            </form>
            <Link to='/login'><button id="signup"> "Have an account? Login"</button></Link>
          </section>
          </Card>
        </>
      );
}

export default Register