import React from "react";
import "./Gallery.css"
const Gallery = () => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h3>Our GAllery </h3>
        </div>
        <div className="box">
          <div className="dream">
            <img src="1.jpg" />
            <img src="2.jpg" />
            <img src="3.jpg" />
            <img src="4.jpg" />
            <img src="5.jpg" />
          </div>
          <div className="dream">
            <img src="6.jpg" />
            <img src="7.jpg" />
            <img src="8.jpg" />
            <img src="9.jpg" />
            <img src="10.jpg" />
          </div>
          <div className="dream">
            <img src="11.jpg" />
            <img src="12.jpg" />
            <img src="13.jpg" />
            <img src="14.jpg" />
            <img src="15.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
