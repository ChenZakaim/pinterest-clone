import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { postItemToServer } from "../fetchHandl";

function AddComment({ addCommentToArr, postId }) {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
 
  async function handleSubmit() {
    console.log("SUBMIT");
    const newCom = await postItemToServer("comments",{postId, name: title, body, email: user.email})
    addCommentToArr(newCom);
  }
  function handleChange(e, setFunc) {
    setFunc(e.target.value);
  }

  return (
    <div className="pop-up-component">
      <label>title:</label>
      <input type="text" id="title" name="title" value={title} onChange={(e)=>handleChange(e, setTitle)}></input>
      <label htmlFor="body">comment:</label>
      <input type="text" id="body" name="body" value={body} onChange={(e)=>handleChange(e, setBody)}></input>
      <button onClick={handleSubmit}></button>
    </div>
  );
}
export default AddComment;
