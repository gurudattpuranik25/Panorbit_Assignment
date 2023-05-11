import React, { useContext } from "react";
import SideMenu from "../components/SideMenu";
import "../styles/user.css";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/Context";
import Profile from "./Profile";

function User() {
  return (
    <div className="user__home__page">
      <div className="user__sections">
        <SideMenu />
        <Profile />
      </div>
    </div>
  );
}

export default User;
