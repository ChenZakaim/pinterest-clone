import { useContext, useEffect, useState } from "react";
import { getItemArray } from "../fetchHandl";
import { UserContext } from "../context/UserContext";
import Post from "./Post";
function Posts() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      const POSTS = await getItemArray("posts", user.id);
      setPosts(POSTS);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  function reloadPage() {
    loadPosts();
  }
  return (
    <div>
        <h1>my posts</h1>
      {posts ? (
        posts.map((post, key) => {
          console.log("post: ", post);
          return <Post key={key} post={post} reloadPage={reloadPage} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default Posts;
