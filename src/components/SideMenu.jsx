import React, { useContext } from "react";
import "../styles/sideMenu.css";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/Context";
import loader from "../assets/loader.gif";

function SideMenu() {
  const { userId } = useParams();

  const { userAccounts } = useContext(UserContext);

  const selectedItem = userAccounts[userId - 1];

  return (
    <div className="side__menu">
      {!selectedItem ? (
        <img className="loading" src={loader} alt="" />
      ) : (
        <div className="sections">
          <p className="section__link">
            <Link className="nav__link" to={`/profile/${selectedItem.id}`}>
              Profile
            </Link>
          </p>
          <p className="section__link">
            <Link className="nav__link" to={`/posts/${selectedItem.id}`}>
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
      )}
    </div>
  );
}

export default SideMenu;
