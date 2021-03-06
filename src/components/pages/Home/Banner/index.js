import React from "react";
import banner1 from "../../../../assets/hero-bcg.jpeg";
import banner2 from "../../../../assets/hero-bcg-2.jpeg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="banner container">
      <article className="banner__left">
        <h1 className="banner__title">Design Your Comfort Zone</h1>
        <p className="banner__detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim
          veritatis iste eius nemo! Voluptatum, non, adipisci laudantium illo
          quidem ab, ratione reprehenderit voluptatibus expedita necessitatibus
          eum exercitationem consequuntur quia?
        </p>
        <button>
          <Link to="/products">Shop now</Link>
        </button>
      </article>
      <article className="banner__image">
        <img src={banner1} alt="" className="banner__image--img1" />
        <img src={banner2} alt="" className="banner__image--img2" />
      </article>
    </section>
  );
};

export default Banner;
