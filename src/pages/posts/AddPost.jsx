import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { postItemToServer } from "../../fetchHandl";

function AddPost({ addPostToArr }) {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function handleSubmit() {
    console.log("SUBMIT");
    const newPost = await postItemToServer("posts", {
      title,
      body,
      userId: user.id,
    });
    console.log("newPost: ", newPost);
    addPostToArr(newPost);
  }
  function handleChange(e, setFunc) {
    setFunc(e.target.value);
  }

  return (
    <div className="pop-up-component">
      <div className="pop-up">
        <label>title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => handleChange(e, setTitle)}
        ></input>
        <label htmlFor="body">body:</label>
        <input
          type="text"
          id="body"
          name="body"
          value={body}
          onChange={(e) => handleChange(e, setBody)}
        ></input>
        <button onClick={handleSubmit}>add post</button>
      </div>
    </div>
  );
}
export default AddPost;
