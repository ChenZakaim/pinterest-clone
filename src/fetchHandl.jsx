export default async function getUserByUsername(username) {
  try {
    const response = await fetch(
      `http://localhost:3000/users?username=${username}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return "User not found";
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    // if (!result?.username) {
    //   console.log("yyy");
    // }
    return result;
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
}
