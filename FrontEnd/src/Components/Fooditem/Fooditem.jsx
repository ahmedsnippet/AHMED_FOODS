import React from "react";
import "./Fooditem.css"

const Fooditem = () => {
  return (
    <>
      <div className="main">
        <h1 className="heading">Popular Food</h1>
        <div className="col">
          <div className="row">
            <div className="img">
              <img src="pizza.png" alt="" />
            </div>
            <div className="price">
              <h4>$45</h4>
            </div>
            <div className="name">
              <h4> Pizza </h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="salad.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
          <div className="row">
            <div className="img">
              <img src="roll.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
          <div className="row">
            <div className="img">
              <img src="roast.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
          <div className="row">
            <div className="img">
              <img src="mix.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
          <div className="row">
            <div className="img">
              <img src="kebab.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
          <div className="row">
            <div className="img">
              <img src="hotDog.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
          <div className="row">
            <div className="img">
              <img src="fries.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
          <div className="row">
            <div className="img">
              <img src="friedChicken.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
          <div className="row">
            <div className="img">
              <img src="cream.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
          <div className="row">
            <div className="img">
              <img src="egg.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>

          <div className="row">
            <div className="img">
              <img src="burger.png" alt="" />
            </div>
            <div className="price"></div>
            <div className="name"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fooditem;
