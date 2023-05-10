import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const Context = ({ children }) => {
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

  const value = {
    userAccounts,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default Context;
