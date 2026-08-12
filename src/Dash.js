import React from "react";
import { useNavigate } from "react-router-dom";
const App = () => {
   const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <center>
      <h1>Dashboard</h1>
      <h2>Welcome, {user?.name} </h2>
      <button type="link" onClick={() => navigate("/login")} >Log Out</button>
    </center>

  )
}
export default App