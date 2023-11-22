const getUserBy = async (username) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users?${(username = username)}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return "User not found";
      }
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
