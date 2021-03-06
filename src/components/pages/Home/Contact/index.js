import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h3>Join our newsletter and get 20% off</h3>
      <div className="contact__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <form action="" className="contact__form">
          <input type="text" placeholder="Enter your email" />
          <input type="button" value="Subcribe" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
