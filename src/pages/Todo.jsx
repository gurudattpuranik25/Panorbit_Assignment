import React, { useContext } from "react";
import SideMenu from "../components/SideMenu";
import UserHeader from "../components/UserHeader";
import { UserContext } from "../context/Context";
import "../styles/todo.css";

function Todo() {
  const { getUser } = useContext(UserContext);

  const selectedItem = getUser();

  return (
    <div className="todo__home">
      <div className="todo__page">
        <SideMenu />
        <div className="todo__details">
          <UserHeader pageTitle="ToDo" selectedItem={selectedItem} />
          <h1>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default Todo;
