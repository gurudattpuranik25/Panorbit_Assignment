import React, { useContext } from "react";
import Menu from "@mui/material/Menu";
import "../styles/userHeader.css";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";

function UserHeader({ pageTitle, selectedUser }) {
  const { userAccounts } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // generate random users to show under profile menu
  const randomNumber = () => Math.floor(Math.random() * userAccounts.length);

  const firstUser = userAccounts[randomNumber()];
  const secondUser = userAccounts[randomNumber()];

  return (
    <div className="user__header">
      {selectedUser && (
        <>
          <p>{pageTitle}</p>
          <div className="user__profile" onClick={handleClick}>
            <img
              className="user__image"
              src={selectedUser.profilepicture}
              alt="profile_picture"
            />
            <p className="menu__name">{selectedUser.name}</p>
          </div>
          {/* render profile menu */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="dialog__menu"
          >
            <div className="menu">
              <img
                className="dialog__picture"
                src={selectedUser.profilepicture}
                alt=""
              />
              <p className="dialog__name">{selectedUser.name}</p>
              <p className="dialog__email">{selectedUser.email}</p>
              <div className="horizontal__border"></div>
              <div className="dialog__user__list">
                <Link
                  className="dialog__user__link"
                  to={`/profile/${firstUser.id}`}
                  onClick={handleClose}
                >
                  <img src={firstUser.profilepicture} alt="" />
                  <p>{firstUser.name}</p>
                </Link>
                <div className="horizontal__border"></div>
                <Link
                  className="dialog__user__link"
                  to={`/profile/${secondUser.id}`}
                  onClick={handleClose}
                >
                  <img src={secondUser.profilepicture} alt="" />
                  <p>{secondUser.name}</p>
                </Link>
              </div>
              <Link to="/" className="sign__out">
                Sign out
              </Link>
            </div>
          </Menu>
        </>
      )}
    </div>
  );
}

export default UserHeader;
