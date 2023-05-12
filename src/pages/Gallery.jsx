import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import SideMenu from "../components/SideMenu";
import UserHeader from "../components/UserHeader";
import "../styles/gallery.css";
import Chats from "../components/Chats";

function Gallery() {
  const { getUser, userAccounts } = useContext(UserContext);

  const selectedUser = getUser();

  return (
    <div className="gallery__home">
      <div className="gallery__page">
        <SideMenu activeLink="gallery" />
        <div className="gallery__details">
          <UserHeader pageTitle="Gallery" selectedUser={selectedUser} />
          <h1>Coming Soon</h1>
        </div>
      </div>
      <Chats userAccounts={userAccounts} selectedUser={selectedUser} />
    </div>
  );
}

export default Gallery;
