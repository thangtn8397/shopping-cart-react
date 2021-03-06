import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error container wrapper">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <button>
        <Link to="/">Back to home</Link>
      </button>
    </div>
  );
};

export default Error;
