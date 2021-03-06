import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="navigation-items">
      <NavigationItem name="Home" url="/" />
      <NavigationItem name="About" url="/about" />
      <NavigationItem name="Products" url="/products" />
    </ul>
  );
};

export default NavigationItems;
