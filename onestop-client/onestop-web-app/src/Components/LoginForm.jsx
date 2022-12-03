import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from 'react-icons/fa'
import Card from "./Card"

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  const [login, setLogin] = useState(false);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    }
    try {
      const res = await axios.post(
        userData
      );
      alert(res.data.message);
      localStorage.setItem("user", res.data);
      // navigate("/")
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("username",res.data.name);
      setLogin(!login);
      navigate("/")
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
    <Card>
    <section className='heading'>
          <h1>
            <FaSignInAlt /> Login
          </h1>
          <p>Login into your account</p>
        </section>

        <section className='form'>
          <form onSubmit={handleLogin}>
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
              <button type='submit' className='btn2 btn2-block'>
                Submit
              </button>
            </div>
          </form>
        </section>
        </Card>
        </>
  );
};

export default LoginForm;
