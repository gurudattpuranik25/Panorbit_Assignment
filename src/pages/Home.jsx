import React, { useEffect, useState } from "react";
import "../styles/Home.css";

function Home() {
  const [userAccounts, setUserAccounts] = useState([]);

  const fetchUsers = () => {
    fetch("https://panorbit.in/api/users.json")
      .then((res) => res.json())
      .then((data) => setUserAccounts(data.users))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="home__page">
      <div className="users__container">
        <h1 className="heading">Select an account</h1>
        <div className="user__list">
          <div className="accounts">
            {userAccounts.length === 0 ? (
              <h2 className="loading">fetching user accounts...</h2>
            ) : (
              userAccounts.map((user) => {
                return (
                  <div className="individual__user" key={user.id}>
                    <img
                      className="profile__pic"
                      src={user.profilepicture}
                      alt=""
                    />
                    <p className="username">{user.name}</p>
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
