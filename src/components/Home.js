import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = (props) => {
  return (
    <div>
      <p>Sudokrew Technical Interview App</p>
      <p>By Roberto Delgado</p>
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
    </div>
  );
};

export default Home;
