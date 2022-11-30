import React, { useState } from "react";
import axios from "axios";

function SignUpForm() {
    // const navigate = useNavigate();
  const [input,setInput]=useState({
    name:"",
    mobileNumber: "",
    email:"",
    password: "",

  });

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res= await axios.post("http://localhost:8000/api/users",input);
      alert(res.data.message);
    //   navigate("/login")
    }catch(error){
      alert(error.response.data.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="name"
          type="text"
          placeholder="Enter Full Name"
          value={input.name}
                  onChange={(e)=> setInput({...input,[e.target.name]: e.target.value})
                  }
        />
        <input
          className="form-control"
          name="mobileNumber"
          type="text"
          placeholder="Enter Mobile Number"
          value={input.mobileNumber}
                  onChange={(e)=> setInput({...input,[e.target.name]: e.target.value})
                  }
        />
        <input
          className="form-control"
          name="email"
          type="text"
          placeholder="Enter Email"
          value={input.username}
                  onChange={(e)=> setInput({...input,[e.target.name]: e.target.value})
                  }
        />
        <input
          className="form-control"
          name="password"
          type="text"
          placeholder="Enter Password"
          value={input.password}
                  onChange={(e)=> setInput({...input,[e.target.name]: e.target.value})
                  }
        />
        <input
          className="form-control"
          name="password2"
          type="text"
          placeholder="Enter Password"
          value={input.password2}
                  onChange={(e)=> setInput({...input,[e.target.name]: e.target.value})
                  }
        />
        <br />
        <button className="btn btn-dark" id="submit">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
