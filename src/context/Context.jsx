import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  const getUser = () => {
    const { userId } = useParams();

    const selectedItem = userAccounts[userId - 1];

    return selectedItem;
  };

  const value = {
    userAccounts,
    getUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default Context;
