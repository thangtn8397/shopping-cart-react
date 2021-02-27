import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = ({ name }) => {
  return (
    <li className="navigation-item">
      <Link to="/products">{name}</Link>
    </li>
  );
};

export default NavigationItem;
