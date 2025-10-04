import afiche from "./../assets/AficheKimetsu.jpg"
import iconoPerfil from "./../assets/iconPerfil.webp"
import { useState, useEffect } from "react";
import CommentForm from "./commentForm";
import ListComments from "./listcomment";
let Post = ()=>{
    //Manejo de estados de los likes
    let [likes, setlike] = useState(0);
    //manejo del boton de comentarios
    let [btnComment,setBtnComment] = useState(false);
    let isShowComment = () => setBtnComment(!btnComment);

    //funcion para obtener comentarios del formulario
    let [textComment, setTextComment] = useState("");
    //funcion para recibir comentario desde CommentForm
    let getCommentData = (comment)=>{
        setTextComment(comment)
    };
        //listado inicial de comentarios
    let initialComments = [
        {id:1, text:"Me gusta Kimetsu"},
        {id:2, text:"Quien crees que sobrevive"},
        {id:3, text:"Cual es tu cazador favorito"}
    ];
    //estado para comentarios
    let [listData,setListData] = useState(initialComments);
    useEffect(()=>{
        if(textComment.trim() !== ""){
            let newComment = {
                id: Date.now(),
                text : textComment,
            };
            setListData([...listData,newComment]);
        }
    },[textComment]);


    return( 
        <>
            <div className="card" style={{width:'25rem', margin:'1rem auto'}}>
                <div className="card-header d-flex justify-content-between align-items-center bg-info-subtle">
                    <div className="d-flex align-items-center">
                        <div style={{width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundImage:`url(${iconoPerfil})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            marginRight: "10px",}}>
                        </div>
                        <div>
                            <strong>CyberOtaku</strong>
                            <div style={{fontSize: "0.8rem", color: "gray"}}>
                                18 h - <span title="Public">🌎</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-light me-1">⋯</button>
                        <button className="btn btn-sm btn-light">✖</button>
                    </div>
                </div>
            
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Demon Slayer (El castillo infinito)</h5>
                        <p className="card-text">La batalla final comienza este 11 de septiembre de 2025</p>
                        <img src={afiche} className="card-img-top" alt="..."/>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-around">
                            <span>👍🤩🥰🥱 {likes}</span> <span>2mil 🗨️</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-around">
                            <button className="btn btn-info"
                                onClick={()=>setlike(likes+1)}>👍Likes</button> <button className="btn btn-info"
                                onClick={isShowComment}>🗨️comment</button>
                        </li>
                    </ul>
                    <div className="card-foother">
                        {btnComment && <CommentForm getCommentData = {getCommentData}/>}
                    </div>
                    <ListComments listComData = {listData} />  
                </div>
            </div>    
        </>
    );
};

export default Post;