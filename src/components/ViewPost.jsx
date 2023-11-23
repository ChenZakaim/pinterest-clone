import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostWithComments } from "../fetchHandl";
import Comment from "./Comment";

function ViewPost() {
  const [withComments, setWithComments] = useState(null);
  const params = useParams();
  const [showComments, setShowComments] = useState(false);
  let commentsArray;
  async function getPostComments() {
    let postWithComments = await getPostWithComments(params.id);
    setWithComments(postWithComments);
    commentsArray = postWithComments["comments"];
  }
  useEffect(() => {
    getPostComments();
    console.log("inside use ef");
  }, [params.id, showComments]);

  return (
    <div>
      {withComments ? (
        <div>
          <div className="post">
            <h1>{withComments.title}</h1>
            <p>{withComments.body}</p>
          </div>
          <button
            onClick={() => {
              setShowComments((prev) => {
               return !prev;
              });
            }}
          >
            {showComments ? "hide comments" : "show comments"}
          </button>
          {showComments &&
            withComments.comments.map((com, key) => {
              console.log("com: ", com);
              return (
                <div className="comment" key={key}>
                  <Comment comment={com} />
                </div>
              );
            })}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default ViewPost;
