import React, { useContext } from "react";
import SideMenu from "../components/SideMenu";
import "../styles/posts.css";
import UserHeader from "../components/UserHeader";
import { UserContext } from "../context/Context";
import Chats from "../components/Chats";

function Posts() {
  const { getUser, userAccounts } = useContext(UserContext);

  const selectedUser = getUser();

  return (
    <div className="posts__home">
      <div className="posts__page">
        <SideMenu activeLink="posts" />
        <div className="post__details">
          <UserHeader pageTitle="Posts" selectedUser={selectedUser} />
          <h1>Coming Soon</h1>
        </div>
      </div>
      <Chats userAccounts={userAccounts} selectedUser={selectedUser} />
    </div>
  );
}

export default Posts;
