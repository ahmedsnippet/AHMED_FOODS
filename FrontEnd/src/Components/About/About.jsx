import React from "react";
import './About.css'

const About = () => {
  return (
    <>
    <div className="main-content">
      <div className="about-left">
        <h1>About Us | </h1>
        <p>Welcome to <span>AHMED FOODs</span>, where our passion for food meets your culinary adventure. Founded with a love for exploring flavors from around the globe, we are dedicated to bringing you delicious recipes, expert cooking tips, and insightful articles that inspire and delight. Whether you're a seasoned chef or a kitchen novice, our goal is to empower you with the knowledge and inspiration to create memorable meals. From mouthwatering appetizers to decadent desserts, we celebrate the diversity of cuisines and the joy of sharing great food with loved ones. Join us on this flavorful journey and let's savor the art of cooking together.</p>
      </div>
      <div className="about-right">
        <img src="./about.png"/>
      </div>
      </div>
    </>
  );
};

export default About;
