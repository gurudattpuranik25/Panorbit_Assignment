import React from "react";

function UserHeader({ pageTitle, selectedItem }) {
  return (
    <div className="user__header">
      {selectedItem && (
        <>
          <p>{pageTitle}</p>
          <div className="user__profile">
            <img
              className="user__image"
              src={selectedItem.profilepicture}
              alt="profile_picture"
            />
            <p className="menu__name">{selectedItem.name}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default UserHeader;
