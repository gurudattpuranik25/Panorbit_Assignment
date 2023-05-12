import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import SideMenu from "../components/SideMenu";
import UserHeader from "../components/UserHeader";
import "../styles/gallery.css";

function Gallery() {
  const { getUser } = useContext(UserContext);

  const selectedItem = getUser();

  return (
    <div className="gallery__home">
      <div className="gallery__page">
        <SideMenu activeLink="gallery" />
        <div className="gallery__details">
          <UserHeader pageTitle="Gallery" selectedItem={selectedItem} />
          <h1>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
