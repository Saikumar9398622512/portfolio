import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })
  const { name, email, password, confirmPassword, gender } = values
  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }
  const getPasswordStrength = (password) => {
    if (!password) return { text: "", color: "" }
    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    if (password.length <= 4) {
      return { text: "Weak Password", color: "red" }
    }
    if (password.length <= 7) {
      return { text: "Medium Password", color: "orange" }
    }
    if (
      password.length >= 8 &&
      hasUpper &&
      hasLower &&
      hasNumber &&
      hasSpecial
    ) {
      return { text: "Strong Password", color: "green" }
    }
    return { text: "Medium Password", color: "orange" }
  }
  const passwordStrength = getPasswordStrength(password)
  const submitHandler = (e) => {
    e.preventDefault()
    if (!name) {
      alert("Please enter your name")
      return
    }
    if (!email) {
      alert("Please enter your email")
      return
    }
    if (!password) {
      alert("Please enter your password")
      return
    }
    if (password !== confirmPassword) {
      alert("Password Mismatch")
      return
    }
    if (!gender) {
      alert("Please select your gender")
      return
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find((user) => user.email === email);
    if (userExists) {
      alert("Email already registered")
      return
    }
    const newUser = { id: Date.now(), name, email, password, gender, };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    const userData = {
      name,
      email,
      password,
      gender,
    }
    localStorage.setItem("user", JSON.stringify(userData))
    alert("Registration Successful")
    setValues({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })
    navigate("/login")
  }
  return (
    <center>
      <h1>Registration Form</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Enter Name" value={name} onChange={changeHandler} />
        <br />
        <br />
        <input type="email" name="email" placeholder="Enter Email" value={email} onChange={changeHandler} />
        <br />
        <br />
        <input type="password" name="password" placeholder="Enter Password" value={password} onChange={changeHandler} />
        <br />
        <span
          style={{ color: passwordStrength.color, fontWeight: "bold", }}>
          {passwordStrength.text}
        </span>
        <br />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={changeHandler} />
        <br />
        <br />
        <select name="gender" value={gender} onChange={changeHandler}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <br />
        <br />
        <button type="submit">Register</button>
        <br />
        <br />
        <p>Already have an account?</p>
        <button type="button" onClick={() => navigate("/login")}>Login</button>
      </form>
    </center>
  )
}
export default App