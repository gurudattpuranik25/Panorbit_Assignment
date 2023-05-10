import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function UserAccount({ userDetails }) {
  const { id, name, profilepicture } = userDetails;
  return (
    <>
      <img
        className="profile__pic"
        src={profilepicture}
        alt="user_profile_pic"
      />
      <Link className="user__link" to={`/user/${id}`}>
        <p className="username">{name}</p>
      </Link>
    </>
  );
}

export default UserAccount;
