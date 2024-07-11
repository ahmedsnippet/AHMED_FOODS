import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link>AHMED FOODS</Link>
        </div>

        <ul className={menu ? "navbar-list" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/food">Foods</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
          <NavLink to="/reservation">Reservation</NavLink>
          </li>
        </ul>
        <div
          className="humburger"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <CiMenuFries />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
