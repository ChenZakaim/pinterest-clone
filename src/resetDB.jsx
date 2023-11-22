async function ressetDB(type) {
  try {
    const DATA = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
    const ARR = await DATA.json();
    console.log("ARR: ", ARR);
    
    const url = `http://localhost:3000/${type}`;
        ARR.forEach(async (item) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Data posted successfully:", result);
      } catch (error) {
        console.error("Error posting data:", error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export default ressetDB;
