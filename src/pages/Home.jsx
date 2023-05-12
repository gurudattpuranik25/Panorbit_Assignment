import React, { useContext } from "react";
import "../styles/home.css";
import loader from "../assets/loader.gif";
import UserAccount from "../components/UserAccount";
import { UserContext } from "../context/Context";

function Home() {
  const { userAccounts } = useContext(UserContext);

  return (
    <div className="home__page">
      <div className="users__container">
        <h1 className="heading">Select an account</h1>
        <div className="user__list">
          <div className="accounts">
            {userAccounts.length === 0 ? (
              <img className="loader" src={loader} alt="" />
            ) : (
              userAccounts.map((user) => {
                return (
                  <div className="individual__user" key={user.id}>
                    <UserAccount
                      userDetails={user}
                      userAccounts={userAccounts}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
