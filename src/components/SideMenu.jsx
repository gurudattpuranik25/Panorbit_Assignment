import React, { useContext } from "react";
import "../styles/sideMenu.css";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/Context";
import loader from "../assets/loader.gif";

function SideMenu({ activeLink }) {
  const { userId } = useParams();

  const { userAccounts } = useContext(UserContext);

  const selectedUser = userAccounts[userId - 1];

  return (
    <div className="side__menu">
      {!selectedUser ? (
        <img className="loading" src={loader} alt="" />
      ) : (
        <div className="sections">
          <p
            className={`section__link ${
              activeLink === "profile" ? "active" : ""
            }`}
          >
            <Link className="nav__link" to={`/profile/${selectedUser.id}`}>
              <span className={activeLink === "profile" ? "active" : ""}>
                Profile
              </span>
            </Link>
          </p>
          <p
            className={`section__link ${
              activeLink === "posts" ? "active" : ""
            }`}
          >
            <Link className="nav__link" to={`/posts/${selectedUser.id}`}>
              <span className={activeLink === "posts" ? "active" : ""}>
                Posts
              </span>
            </Link>
          </p>
          <p
            className={`section__link ${
              activeLink === "gallery" ? "active" : ""
            }`}
          >
            <Link className="nav__link" to={`/gallery/${selectedUser.id}`}>
              <span className={activeLink === "gallery" ? "active" : ""}>
                Gallery
              </span>
            </Link>
          </p>
          <p
            className={`section__link ${activeLink === "todo" ? "active" : ""}`}
          >
            <Link className="nav__link" to={`/todo/${selectedUser.id}`}>
              <span className={activeLink === "todo" ? "active" : ""}>
                ToDo
              </span>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
