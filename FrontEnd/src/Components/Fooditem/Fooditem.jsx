import React from "react";
import "./Fooditem.css";

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
              <p>$45</p>
            </div>
            <div className="name">
              <h4>Pizza</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="salad.png" alt="" />
            </div>
            <div className="price"><p>$46</p></div>
            <div className="name">
              <h4>Salad</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="roll.png" alt="" />
            </div>
            <div className="price"><p>$47</p></div>
            <div className="name">
              <h4>Roll</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="roast.png" alt="" />
            </div>
            <div className="price">
              <p>$48</p>
            </div>
            <div className="name">
              <h4>Roast</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="mix.png" alt="" />
            </div>
            <div className="price">
              <p>$49</p>
            </div>
            <div className="name">
              <h4>Mix</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="kebab.png" alt="" />
            </div>
            <div className="price">
              <p>$50</p>
            </div>
            <div className="name">
            <h4>kebab</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="hotDog.png" alt="" />
            </div>
            <div className="price">
              <p>$50</p>
            </div>
            <div className="name">
              <h4>Hot Dog</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="fries.png" alt="" />
            </div>
            <div className="price">
              <p>$51</p>
            </div>
            <div className="name">
              <h4>Fries</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="friedChicken.png" alt="" />
            </div>
            <div className="price">
              <p>$4</p>
            </div>
            <div className="name">
              <h4>fried Chicken</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="cream.png" alt="" />
            </div>
            <div className="price">
              <p>$8</p>
            </div>
            <div className="name">
              <h4>cream</h4>
            </div>
          </div>
          <div className="row">
            <div className="img">
              <img src="egg.png" alt="" />
            </div>
            <div className="price">
              <p>$10</p>
            </div>
            <div className="name">
              <h4>Egg</h4>
            </div>
          </div>

          <div className="row">
            <div className="img">
              <img src="burger.png" alt="" />
            </div>
            <div className="price">
              <p>$6</p>
            </div>
            <div className="name">
              <h4>Burger</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fooditem;
