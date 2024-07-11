import React from "react";
import "./Home.css";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <>
      <div className="HeroSection">
        <div className="HeroSection-left">
          <img src="./HeroSection.png" />
        </div>
        <div className="HeroSection-right">
          <div className="heading">
            <h1>ONE - STOP </h1>
            <h3>DELICIOUS FOOD</h3>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe, harum possimus accusantium quidem necessitatibus sit debitis sapiente, rem vel quasi architecto, ratione asperiores sequi. Eligendi maiores beatae aut unde!
            </p>
          </div>
          <div className="btn">
          <button>Order Now!</button>
          </div>
        </div>
      </div>
      <Gallery/>
    </>
  );
};

export default Home;
