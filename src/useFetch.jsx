async function handleFetch(url, method, body) {
  try {
    const response = await fetch(`http://localhost:3000/${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: JSON.stringify(body),
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "Error fetching data:", details: error };
  }
}

export default handleFetch;
