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
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
}
export async function getItemArray(type, userId) {
  try {
    const response = await fetch(
      `http://localhost:3000/${type}?_page=${userId}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        return "items array not found";
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
export async function getPostWithComments(postId) {
  try {
    const response = await fetch(
      `http://localhost:3000/posts/${postId}?_embed=comments`
    );
    if (!response.ok) {
      if (response.status === 404) {
        return "post was not found";
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

export async function deleteItemByItsId(type, itemId) {
  try {
    const response = await fetch(`http://localhost:3000/${type}/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return `${type} not found`;
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return `${type} deleted successfully`;
  } catch (error) {
    console.error(`Error deleting ${type}:`, error);
    return error;
  }
}

export async function handleFetch(url, method, body) {
  try {
    console.log(
      "`http://localhost:3000${url}`: ",
      `http://localhost:3000${url}`
    );
    const response = await fetch(`http://localhost:3000${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method === "GET" ? undefined : JSON.stringify(body),
    });
    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    return { error: "Error fetching data:", details: error };
  }
}
