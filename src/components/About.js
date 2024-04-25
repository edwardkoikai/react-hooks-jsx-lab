import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p> I'm a passionate front-end software developer dedicated to crafting engaging and user-friendly digital experiences. With a keen eye for design and a strong foundation in web technologies, I specialize in bringing ideas to life through clean, efficient, and responsive code. Whether it's building interactive websites, dynamic web applications, or optimizing user interfaces, I thrive on turning concepts into reality. Let's collaborate and create something extraordinary together.</p>
      <img src= {image} alt="I made this" />
    </div>)
}

export default About;
