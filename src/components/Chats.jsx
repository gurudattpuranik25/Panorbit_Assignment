import React, { useState } from "react";
import "../styles/chats.css";

const Chats = ({ userAccounts, selectedItem }) => {
  const [chatMenu, setChatMenu] = useState(false);

  const toggleChat = () => {
    setChatMenu(!chatMenu);
  };

  const chatList = userAccounts.filter((user) => user.id !== selectedItem.id);
  console.log(chatList);

  return (
    <div className="chat__section">
      <div className={`chat__container ${chatMenu ? "expanded" : ""}`}>
        <button className="toggle__button" onClick={toggleChat}>
          <div className="btn__text">
            <i className="fa-regular fa-message"></i> <p>Chats</p>
          </div>

          {chatMenu ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </button>
        {chatMenu && (
          <div className="chat__messages">
            {chatList.map((user) => {
              return (
                <div className="user__status">
                  <div className="user__contact" key={user.id}>
                    <img src={user.profilepicture} alt="chat_profile" />
                    <p id="username">{user.name}</p>
                  </div>
                  <div className="status__indicator"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;
