import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const App = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    user: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password, user } = loginData;

  const changeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user registered");
      return;
    }

    if (
      email === storedUser.email &&
      password === storedUser.password &&
      user === storedUser.user
    ) {
      alert("Login Successful");

      if (user === "Admin") {
        navigate("/Admindashboard");
      } else {
        navigate("/Userdashboard");
      }
    } else {
      alert("Invalid Email, Password, or User Type");
    }
  };

  return (
    <center>
      <h1>Login Page</h1>

      <form onSubmit={loginHandler}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={changeHandler}
          required
        />

        <br />
        <br />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={changeHandler}
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

        <br />
        <br />

        <select
          name="user"
          value={user}
          onChange={changeHandler}
          required
        >
          <option value="">Select User</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        <br />
        <br />

        <button type="submit">Login</button>

        <br />
        <br />

        <button
          type="button"
          onClick={() => navigate("/registration")}
        >
          Register
        </button>
      </form>
    </center>
  );
};

export default App;