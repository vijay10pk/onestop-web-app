import React, { useState } from 'react'
import axios from "axios";
import { FaUser } from 'react-icons/fa'
import Card from '../Components/Card';
import { Link, useNavigate } from 'react-router-dom';

const url = 'http://13.58.197.46/profregister/'

const Register = () => {

    const navigate = useNavigate();
    const [formData,setFormData]=useState({
        userName:"",
        mobileNumber: "",
        email:"",
        password: "",
        password2: "",
        address: "",
        serviceOffered: "",
    
      });

      const [errMsg,setErrmsg] = useState({
        userName:"",
        phoneNumber: "",
        email:"",
        password: "",
        password2: "",
        address: "",
        serviceOffered: "",
      })
    
      const [formValid,setFormvalid] = useState(false)
      const [error,setError] = useState('')
      // const { userName, email, mobileNumber, password, password2, address, serviceOffered } = formData

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
        let userData = {
            userName : formData.userName,
            email: formData.email,
            password: formData.password,
            address: formData.address,
            phoneNumber: formData.phoneNumber,
            serviceOffered: formData.serviceOffered
        }
        axios.post(url,userData)
        .then(response => {
          navigate('/success',{replace:true})
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
        setFormData({
          userName:"",
          phoneNumber: "",
          email:"",
          password: "",
          password2: "",
          address: '',
          serviceOffered: ''
        })
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
          value === "" ? message = "Please enter your password" : passRegex.test(value) ? message = "" : message = "Please enter a valid password. Include atleast one uppercase, one special character[!@#$*%&] and one number"
          break
        
        case "password2":
          let pass2Regex = new RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*%&])(?=.*[0-9])(?=.*[a-z]).{7,20}$/);
          value === "" ? message = "Please enter your password" : !pass2Regex.test(value) ? message = "Please enter a valid password. Include atleast one uppercase, one special character[!@#$*%&] and one number" : value===formData.password ? message='' : message = "Password mismatch"
          break
      
        case "userName":
          if(value===""){
            message="Please enter your Name"
          }
          else if(!(value.match(/^[a-zA-z]+([\s][a-zA-Z]+)*$/))){
            message="Only alphabets. Should not start and end with space"
          }
          else message = ""
          break
  
        case "phoneNumber":
          if(value===""){
            message="Please enter your Phone Number"
          }
          else if(!( String(value)[0]!=="0")){
            message="Should not Start With 0"
          }
          else if(!(value.length===10)){
            message="Phone Number should be 10 digits"
          }
          else message = ""
          break
        case "serviceOffered":
          case "userName":
          if(value===""){
            message="Please enter a service"
          }else{
            message = ""
            break
          } 
  
        default:
          break;
      }
      setErrmsg({...errMsg,[fieldName]:message})
      //Form Valid set
      message === "" ? setFormvalid(true):setFormvalid(false)
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
            <form onSubmit={handleClick}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='userName'
                  name='userName'
                  value={formData.userName}
                  placeholder='Enter your name'
                  onChange={onChange}
                />
                <span className="text-danger">{errMsg.userName}</span>
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={formData.email}
                  placeholder='Enter your email'
                  onChange={onChange}
                />
                <span className="text-danger">{errMsg.email}</span>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='mobileNumber'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  placeholder='Enter your phone number'
                  onChange={onChange}
                />
                <span className="text-danger">{errMsg.phoneNumber}</span>
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={formData.password}
                  placeholder='Enter password'
                  onChange={onChange}
                />
                <span className="text-danger">{errMsg.password}</span>
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password2'
                  name='password2'
                  value={formData.password2}
                  placeholder='Confirm password'
                  onChange={onChange}
                />
                <span className="text-danger">{errMsg.password2}</span>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='address'
                  name='address'
                  value={formData.address}
                  placeholder='Enter your address'
                  onChange={onChange}
                />
                <span className="text-danger">{errMsg.address}</span>
              </div>
              <div className="form-group">
                <select className='form-control' onChange={onChange} name="serviceOffered">
                    <option value="Service you offer">Select a service</option>
                    {serviceList.map((services)=> <option value={services.value} key={serviceList.label}>{services.label}</option>)}
                </select>
                <span className="text-danger">{errMsg.serviceOffered}</span>
              </div>
              <div className='form-group'>
                <button disabled={!formValid} type='submit' className='btn2 btn2-block'>
                  Submit
                </button>
              </div>
              <span className="text-danger">{error}</span>
            </form>
          </section>
          </Card>
        </>
      );
}

export default Register