import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <>
      <p>Login</p>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
    </>
  );
};

export default Login;
