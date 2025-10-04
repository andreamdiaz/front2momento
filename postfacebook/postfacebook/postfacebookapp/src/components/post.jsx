import { useState, useEffect } from "react";
import CommentForm from "./commentform";
import ListComments from "./listcomments";
let Post = () => {
    //Manejo de estado de los likes
    let [likes, setLike]= useState(0);
    //manejo del boton de comentario
    let [btnComment, setBtnComment] = useState(false);
    let isShowComment = () => setBtnComment (!btnComment);
   
    //Funcion para obtener comentarios del formulario
    let [textComment, setTextComment] = useState (""); 
    let getCommentData = (comment)=>{
        setTextComment(comment);
        
    }
     //listado de comentarios
    let listCom =[
        {id:1, text: "Me gusta más el 7"},
        {id:2, text: "El 4 es el mejor, tiene todo lo que un resident evil necesita"}
    ];
    let nextID= 3;
    let[id,setId]= useState (nextID)
    let [listData,setListData] = useState(listCom);
    //comprovar si hay nuevo comentario

useEffect(() => {
  if (textComment) {
    setListData(prev => [
      ...prev,
      { id: id, text: textComment }
    ]);
    setId(prevId => prevId + 1); // ✅ forma segura
  }
}, [textComment]); // 👈 solo depende de textComment


    
   
    // console.log(listCom);
    // console.log (listData)

return (
  <div className="card bg-dark text-light mb-4" style={{ width: "28rem" }}>
    {/* 🔹 ENCABEZADO DEL POST */}
    <div className="card-header d-flex align-items-center">
      <img
        src="https://i.pinimg.com/736x/5f/cb/09/5fcb09c4bd6dc027806cdfcc50fdfa6b.jpg"
        alt="Perfil"
        className="rounded-circle me-2"
        style={{ width: "40px", height: "40px", objectFit: "cover" }}
      />
      <div>
        <h6 className="mb-0">Leon S. Kennedy</h6>
        <small className="text-muted">Hace 2 horas</small>
      </div>
    </div>

    {/* 🔹 CUERPO DEL POST */}
    <div className="card-body">
      <p className="card-text">
        ¿Cuál es el mejor Resident Evil de todos los tiempos? 👇
      </p>
      <img
        src="https://i.pinimg.com/736x/22/a6/fa/22a6fab993e2848bdad48f0a5ca78387.jpg"
        className="img-fluid rounded"
        alt="Resident Evil"
      />
    </div>

    {/* 🔹 REACCIONES */}
    <div
    className="px-3 py-2 d-flex justify-content-between text-white"
      style={{ fontSize: "0.9rem" }}
>
  <div>👍 ❤️ 😮 {likes}</div>
  <div>{listData.length} comentarios</div>
</div>


    <hr className="my-1 text-secondary" />

    {/* 🔹 BOTONES DE ACCIÓN */}
    <div className="d-flex justify-content-around py-2">
      <button
        className="btn btn-sm btn-outline-light"
        onClick={() => setLike(likes + 1)}
      >
        👍 Me gusta
      </button>
      <button
        className="btn btn-sm btn-outline-light"
        onClick={isShowComment}
      >
        💬 Comentar
      </button>
      <button className="btn btn-sm btn-outline-light">🔄 Compartir</button>
    </div>

    <hr className="my-1 text-secondary" />

    {/* 🔹 ZONA DE COMENTARIOS */}
    <div className="card-footer bg-dark">
      {btnComment && <CommentForm getCommentData={getCommentData} />}
      <ListComments listComData={listData} />
    </div>
  </div>
);


}

export default Post;
