import React from "react";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

const Services = () => {
  return (
    <section className="services">
      <div className="services__content container">
        <article className="services__header">
          <h2>services furniture built only for you</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <div className="services__elements">
          <article className="services__element">
            <span className="services__element-icon">
              <ExploreOutlinedIcon />
            </span>
            <h4>Mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </article>

          <article className="services__element">
            <span className="services__element-icon">
              <ExploreOutlinedIcon />
            </span>
            <h4>Mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </article>
          <article className="services__element">
            <span className="services__element-icon">
              <ExploreOutlinedIcon />
            </span>
            <h4>Mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
