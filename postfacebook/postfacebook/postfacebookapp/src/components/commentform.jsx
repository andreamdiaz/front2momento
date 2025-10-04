import { useState } from "react";

let CommentForm = ({ getCommentData }) => {
  let [comment, setComment] = useState("");

  let getComment = (e) => {
    setComment(e.target.value);
  };

  let handleSubmit = () => {
    if (comment.trim()) {
      getCommentData(comment);
      setComment(""); // limpia el textarea
    }
  };

  return (
    <section className="comentarios d-flex align-items-start">
      {/* Avatar */}
      <img
        src="https://i.imgflip.com/8132ec.png"
        alt="avatar"
        className="rounded-circle me-2"
        style={{ width: "40px", height: "40px" }}
      />

      {/* Caja de texto y botón */}
      <div className="flex-grow-1">
        <textarea
          placeholder="Comenta algo..."
          value={comment}
          onChange={getComment}
          className="form-control bg-dark text-white border-0 mb-2"
          style={{ border: "1px solid #bbb" }}
        ></textarea>
        <button className="btn btn-secondary" onClick={handleSubmit}>
          Comentar
        </button>
      </div>
    </section>
  );
};

export default CommentForm;
