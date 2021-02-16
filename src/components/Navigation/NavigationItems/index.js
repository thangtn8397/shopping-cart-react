import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="navigation-items">
      <NavigationItem name="Home" />
      <NavigationItem name="About" />
      <NavigationItem name="Products" />
      <NavigationItem name="Checkout" />
    </ul>
  );
};

export default NavigationItems;
