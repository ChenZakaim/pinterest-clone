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
    return result;
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
}
export async function updateItemInfo(type, itemId, newItem) {
  try {
    const response = await fetch(`http://localhost:3000/${type}/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newItem),
    });
    if (!response.ok) {
      if (response.status === 404) {
        return "item not found";
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseult = await response.json();
    // return result;
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
}
