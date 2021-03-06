import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = ({ name, url }) => {
  return (
    <li className="navigation-item">
      <Link to={url}>{name}</Link>
    </li>
  );
};

export default NavigationItem;
