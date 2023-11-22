import { createContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  function setCurrentUser(newUser) {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  return (
    <UserContext.Provider value={{ user, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
