import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import getUserByUsername from "../fetchHandl";

function Login() {
  const [newUser, setNewUser] = useState({ username: "", website: "" });
  const { user, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function submitLogInForm(e) {
    e.preventDefault();

    try {
      let [user] = await getUserByUsername(newUser.username);
      

      if (!user) {
        throw new Error(
          "Username or password are incorrect. Please try again."
        );
      } else {
        
        setCurrentUser(user);
        alert("Logged in successfully. Welcome!");
        navigate("profile");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <form onSubmit={submitLogInForm}>
        <h1>Log In</h1>
        <label htmlFor="username">Username: </label>
        <br />
        <input
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, username: e.target.value }))
          }
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
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, website: e.target.value }))
          }
          type="password"
          id="password"
          value={newUser.website}
          name="password"
        />
        <br />
        <br />
        <input type="submit" value="Log In" />
      </form>
      <br />

      <hr />
      <h4>-OR-</h4>
      <Button label="Register" onClick={() => navigate("register")} />
    </>
  );
}

export default Login;
