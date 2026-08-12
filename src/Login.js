import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
  
const App = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const changeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }
  const loginHandler = (e) => {
    e.preventDefault()
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (!storedUser) {
      alert("No user registered");
      return
    }
    if (
      loginData.email === storedUser.email &&
      loginData.password === storedUser.password
    ) {
      alert("Login Successful")
      navigate("/dash")
    } else {
      alert("Invalid Email or Password")
    }
  }
  return (
    <center>
      <h1>Login Page</h1>
      <form onSubmit={loginHandler}>
        <input type="email" name="email" placeholder="Enter Email" value={loginData.email} onChange={changeHandler} />
        <br />
        <br />
        <input type="password" name="password" placeholder="Enter Password" value={loginData.password} onChange={changeHandler} />
        <br />
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
        <button type="button" onClick={() => navigate("/regis")} >
          Register
        </button>
      </form>
    </center>
  )
}
export default App