import { useState } from "react";
let CommentForm = ({getCommentData})=>{
    let [comment,setComment] = useState("");
    let getComment = (e)=>{setComment(e.target.value);}
    return(
        <section className="comentarios bg-info-subtle p-2">
            <textarea className="form-control" placeholder="comenta algo..." value={comment} onChange={getComment}>

            </textarea>
            <br />
            <button className="btn btn-info" onClick={()=>getCommentData(comment)}>Comenta</button>
        </section>
    );
};

export default CommentForm;