import React, { useContext } from "react";
import SideMenu from "../components/SideMenu";
import "../styles/posts.css";
import UserHeader from "../components/UserHeader";
import { UserContext } from "../context/Context";

function Posts() {
  const { getUser } = useContext(UserContext);

  const selectedItem = getUser();

  return (
    <div className="posts__home">
      <div className="posts__page">
        <SideMenu />
        <div className="post__details">
          <UserHeader pageTitle="Posts" selectedItem={selectedItem} />
          <h1>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default Posts;
