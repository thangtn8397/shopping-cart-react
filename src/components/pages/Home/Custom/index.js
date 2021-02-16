import React from "react";
import svg from "../../../../assets/icons8-activity-history-48.png";

const Custom = () => {
  return (
    <section className="custom">
      <div className="home__wrapper">
        <div className="custom__header">
          <h2>custom furniture built only for you</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            ullam perspiciatis accusamus facilis, enim, voluptatem sint
            reiciendis quis debitis, labore ipsam? Hic modi, necessitatibus
            error exercitationem dolores optio iure alias.
          </p>
        </div>
        <div className="custom__elements">
          <article>
            <span>{svg}</span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Custom;
