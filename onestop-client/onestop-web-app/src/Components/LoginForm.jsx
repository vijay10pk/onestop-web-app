import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/users/login",
        input
      );
      alert(res.data.message);
      localStorage.setItem("user", res.data);
      // navigate("/")
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        className="form-control"
        name="email"
        type="text"
        placeholder="Email"
        value={input.email}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
      />
      <input
        className="form-control"
        name="password"
        type="text"
        placeholder="Password"
        value={input.password}
        onChange={(e) =>
          setInput({ ...input, [e.target.name]: e.target.value })
        }
      />
      <br />
      <button className="btn btn-dark" id="submit" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
