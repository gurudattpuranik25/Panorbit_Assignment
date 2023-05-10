import React from "react";
import "../styles/sideMenu.css";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="side__menu">
      <div className="sections">
        <p className="section__link">
          <Link className="nav__link" to="/user">
            Profile
          </Link>
        </p>
        <p className="section__link">
          <Link className="nav__link" to="/user">
            Posts
          </Link>
        </p>
        <p className="section__link">
          <Link className="nav__link" to="/user">
            Gallery
          </Link>
        </p>
        <p className="section__link">
          <Link className="nav__link" to="/user">
            ToDo
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SideMenu;
