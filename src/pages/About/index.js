import React from "react";
import PageHero from "../../components/PageHero";
import aboutImg from "../../assets/about-img.jpeg";

const About = () => {
  return (
    <div className="about">
      <PageHero link="About" />
      <article className="about__wrapper container wrapper">
        <img src={aboutImg} alt="" />

        <div className="about__content">
          <h2>Our story</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </article>
    </div>
  );
};

export default About;
