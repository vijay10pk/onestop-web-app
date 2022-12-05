import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from 'react-icons/fa'

const url = 'http://13.58.197.46/login/'

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errMsg,setErrmsg] = useState({
    email:'',
    password:'',
  })

  const [formValid,setFormvalid] = useState(false)
  const [error,setError] = useState('')

  const { email, password } = formData

  const onChange = (e) => {
    var name = e.target.name
    var value = e.target.value
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    validateField(name,value);
  }

  
  const handleClick = (e) => {
    e.preventDefault();
    axios.post(url, { email: formData.email, password: formData.password })
      .then(response => {
        localStorage.setItem("login", response.data.userName);
        navigate('/');
      }).catch(error => {
        if (error.response) {
          setError(error.response.data)
          setTimeout(() => {
            setError('')
          }, 4000);
        } else {
          setError(error.data)
          setTimeout(() => {
            setError('')
          }, 4000);
        }
      })
    setFormData({email:'',password:''})
  }
  

  const validateField = (fieldName, value) => {
    var message;
    switch (fieldName) {
      case 'email':
        let emailRegex = new RegExp(/^[A-z][A-z0-9.]+@[a-z]+\.[a-z]{2,3}$/);
        value === "" ? message = "Please enter your email id" : emailRegex.test(value) ? message = "" : message = "Please enter a valid email ID"
        break;

      case "password":
        let passRegex = new RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*%&])(?=.*[0-9])(?=.*[a-z]).{7,20}$/);
        value === "" ? message = "Please enter your password" : passRegex.test(value) ? message = "" : message = "Please enter a valid password. Include atleast one uppercase, one special character[!@#$*%&] and one number "
        break

      default:
        break;
    }
    //Form err message set
    setErrmsg({...errMsg,[fieldName]:message})
    //Form Valid set
    message === "" ? setFormvalid(true):setFormvalid(false)
  }

  return (
    <>
    <section className='heading'>
          <h1>
            <FaSignInAlt /> Login
          </h1>
          <p>Login into your account</p>
        </section>

        <section className='form'>
          <form onSubmit={handleClick}>
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
              <span className="text-danger">{errMsg.email}</span>
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
              <span className="text-danger">{errMsg.password}</span>
            </div>
            <div className='form-group'>
              <button disabled={!formValid} type='submit' className='btn2 btn2-block'>
                Submit
              </button>
            </div>
          </form>
          <span className="text-danger">{error}</span>
        </section>
    </>
  );
};

export default LoginForm;
