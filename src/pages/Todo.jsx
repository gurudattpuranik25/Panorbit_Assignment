import React, { useContext } from "react";
import SideMenu from "../components/SideMenu";
import UserHeader from "../components/UserHeader";
import { UserContext } from "../context/Context";
import "../styles/todo.css";
import Chats from "../components/Chats";

function Todo() {
  const { getUser, userAccounts } = useContext(UserContext);

  const selectedUser = getUser();

  return (
    <div className="todo__home">
      <div className="todo__page">
        <SideMenu activeLink="todo" />
        <div className="todo__details">
          <UserHeader pageTitle="ToDo" selectedUser={selectedUser} />
          <h1>Coming Soon</h1>
        </div>
      </div>
      <Chats userAccounts={userAccounts} selectedUser={selectedUser} />
    </div>
  );
}

export default Todo;
