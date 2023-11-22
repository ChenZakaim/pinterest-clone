import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import getUserByUsername from "../fetchHandl";

function Register() {
  const { setCurrentUser } = useContext(UserContext);

  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    website: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (key, event) => {
    setNewUser((prev) => {
      return { ...prev, [key]: event.target.value };
    });
  };

  const checkRegister = async () => {
    if (
      newUser.name === "" ||
      newUser.username === "" ||
      newUser.website === ""
    ) {
      setError("Please enter all the details");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(newUser.name)) {
      setError("The name should contain only letters");
      return;
    }

    const isExist = await getUserByUsername(newUser.username);
    console.log(isExist);
    if (isExist[0]) {
      console.log("found");
      setError("The username alredy exist");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data posted successfully:", result);
      setCurrentUser(result);
      navigate("/home");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <input
        value={newUser.name}
        type="text"
        placeholder="name"
        onChange={(event) => {
          handleChange("name", event);
        }}
      />
      <br />
      <input
        value={newUser.username}
        type="text"
        placeholder="username"
        onChange={(event) => {
          handleChange("username", event);
        }}
      />
      <br />
      <input
        value={newUser.website}
        type="text"
        placeholder="website"
        onChange={(event) => {
          handleChange("website", event);
        }}
      />
      <br />
      <button onClick={checkRegister}>Join</button>
      {error && <p>{error}</p>}
    </>
  );
}

export default Register;
