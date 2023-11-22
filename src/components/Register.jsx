import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the hook

function Register() {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    website: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

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
      //app the stat user
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
