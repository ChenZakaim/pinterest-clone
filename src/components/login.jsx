import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const [newUser, setNewUser] = useState({ username: "", password: "" });
  const userContext = useContext(UserContext);
  function submitLogInForm() {
    // try {
    // // check if server if user exists
    // // fetch(`http://localhost:3000/users/`)
    // // if it does, set current user to be it:
    //   if (!Response.ok) {
    //     throw new Error("username or password are incorrect. try again.");
    //   } else {
    //     setCurrentUser(newUser);
    //   }
    // }
    // catch (error) {
    //   alert(error.message);
    // }i
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitLogInForm();
      }}
    >
      <h1>Log In</h1>
      <label htmlFor="username">Username: </label>
      <br />
      <input
        onChange={(e) => {
          setNewUser((prev) => {
            return { ...prev, username: e.target.value };
          });
        }}
        type="text"
        value={newUser.username}
        id="username"
        name="username"
      />
      <br />
      <br />

      <label htmlFor="password">Password: </label>
      <br />
      <input
        onChange={(e) => {
          setNewUser((prev) => {
            return { ...prev, password: e.target.value };
          });
        }}
        type="text"
        id="password"
        value={newUser.password}
        name="password"
      />
      <br />
      <br />
      <input type="submit" value="log in" />
    </form>
  );
}
export default Login;
