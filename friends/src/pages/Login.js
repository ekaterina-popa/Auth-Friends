import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  console.log("credentials", credentials);

  const userLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", {
        username: credentials.username,
        password: credentials.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={userLogin}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          placeholder="Username"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
export default Login;
