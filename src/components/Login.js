import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  // const alertContext = useContext(AlertContext);
  // const authContext = useContext(AuthContext);

  // const { setAlert } = alertContext;
  // const { login, error, clearErrors, isAuthenticated } = authContext;

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     props.history.push('/');
  //   }

  //   if (error === 'Invalid Credentials') {
  //     setAlert(error, 'danger');
  //     clearErrors();
  //   }
  //   // eslint-disable-next-line
  // }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      toast("Please fill in all fields");
    } else {
      login({
        username,
        password,
      });
    }
  };

  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "https://challenge.sudokrew.com/auth",
        formData,
        config
      );
      console.log(res.data);
    } catch (error) {
      // console.log("error in the POST request", error.response);
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
      <Link to="/">
        <button className="btn">Home</button>{" "}
      </Link>
      <ToastContainer />
    </div>
  );
};

export default Login;
