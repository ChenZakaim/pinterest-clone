import { createContext, useState, useEffect } from "react";

const defaultUser = {
  id: 0,
  name: "",
  username: "",
  email: "",
  street: "",
  suite: "",
  city: "",
  zipcode: "",
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const UserContext = createContext({
  user: defaultUser,
  setCurrentUser: () => {},
});

function UserProvider({ children }) {
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    // Fetch user from localStorage during the initial render
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser((prev) => {
          return { ...prev, ...parsedUser };
        });
      } catch (error) {
        console.error("Error parsing user from local storage:", error);
      }
    }
  }, []); // Run the effect only once during the initial render

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function setCurrentUser(newUser) {
    try {
      setUser((prev) => {
        return { ...prev, ...newUser };
      });
      console.log("newUser: ", newUser);
    } catch (error) {
      console.error("Error setting user in local storage:", error);
      // Handle the error accordingly, e.g., show a user-friendly message to the user.
    }
  }

  return (
    <UserContext.Provider value={{ user, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
