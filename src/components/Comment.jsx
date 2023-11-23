import { deleteItemByItsId } from "../fetchHandl";

function Comment({comment}){
    async function deleteCommentByItsId(id){
        let res = await deleteItemByItsId("comments", id);
        alert(res);
        reloadPage();
    }
return(<div className="comments">
    <h2>{comment.name}</h2>
    <h3>{comment.email}</h3>
    <p>{comment.body}</p>
    <button onClick={()=>{deleteCommentByItsId(comment.id)}}>delete</button>

</div>);
}
export default Comment;