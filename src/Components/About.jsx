import React from "react";

const description = "I'm a Senior Data Science Engineer at Purdue University.";
const skillsList = [
  "Computational materials science",
  "Machine learning",
  "Scientific data visualization",
];
const detail1 =
  "I am dedicated to accelerating the discovery of high-performance materials as a way to solve humanity's most pressing challenges. Through materials informatics and cutting-edge AI algorithms, my work aims to push the boundaries of what is possible in materials science.";
const detail2 =
  "My doctoral research involved the development of novel electrolyte materials for energy storage applications. Prior to this, I earned a degree in Mechatronics Engineering, following my passion for robotics and interdisciplinary problem-solving.";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detail1}</p>
        <p>{detail2}</p>
      </div>
    </section>
  );
};

export default About;
