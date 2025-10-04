import { useParams } from "react-router-dom";
import Menu from "../components/menu";
import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function RoomDetailsPage() {
    //console.log("parametro", useParams());
    let {id} = useParams();
    let [slideIndex, setSlideIndex] = useState(1);
    let [roomsApi, setRoomsApi] = useState([]);
    let [loading, setLoading] = useState(true);
    async function getRooms () {
        try{
            let respuesta = await axios.get(`http://localhost:3000/api/habitaciones/${id}`);
            //console.log("respuesta api: ", respuesta.data)
            setRoomsApi(respuesta.data);
        }catch (error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    console.log("detalle room: ", roomsApi);
    //datos de imagen
    let images = [
        {
            src:"https://www.w3schools.com/w3images/livingroom.jpg",
            title:"Living Room"
        },
        {
            src:"https://www.w3schools.com/w3images/diningroom.jpg",
            title:"Dining Room"
        },
        {
            src:"https://www.w3schools.com/w3images/bedroom.jpg",
            title:"Bedroom"
        },
        {
            src:"https://www.w3schools.com/w3images/livingroom2.jpg",
            title:"Living Room II"
        }
    ];

    //referencia para los elemntos/etiquetas del slider
    let slidesRef = useRef([]);
    let dotsRef = useRef([]);

    //funcion para mostras el slider especificado
    function ShowSlide(num){
        let newIndex = num;
    //logica para circular los slides
    if(newIndex > roomsApi.imagenes.length){
        newIndex = 1;
    }
    if(newIndex < 1 ){
        newIndex = roomsApi.imagenes.length
    }
    setSlideIndex(newIndex);
    }

    //efecto  para actualizar las clases cuando cambie el valor del slider
    useEffect(()=>{
        //obtener habitaciones de la api
        getRooms();
        //ocultar todas las imagnes
        slidesRef.current.forEach((slide)=>{
            if(slide){
                slide.style.display = "none";
            }
        });
        //quitar la clase de opacidad
        dotsRef.current.forEach((dot)=>{
            if(dot){
                dot.classList.remove("w3-hover-opacity-off")
            }
        })
        //mostras la imagen actual y activar la clase correspondiente
        if(slidesRef.current[slideIndex -1 ]){
            slidesRef.current[slideIndex -1].style.display = "block"
        }
        if(dotsRef.current[slideIndex -1 ]){
            dotsRef.current[slideIndex -1].classList.add("w3-hover-opacity-off");
        }

    },[slideIndex]);

    function imagenCurrent(n){
        ShowSlide(n);
    }
    if(loading) return <p>Cargando habitacion...</p>
    return (
    <>    
        <Menu/>
        <div className="w3-container" id="apartment">
            <div className="w3-row-padding">
                <div className="w3-half"> {/*<!--columna 1 -->*/}
                    <h2 className="w3-text-green">The Apartment #{id}</h2>
                    <p>{roomsApi.descripcion}</p>
                    { roomsApi.imagenes.map((img, i)=>(
                        <div key={i} className="w3-display-container mySlides"
                        ref={(div)=>slidesRef.current[i] = div} style={{display: i === 0 ? "block" : "none"}}>
                            <img src={img} style={{"width":"100%","marginBottom":"-6px"}} alt={roomsApi.tipo}/>
                            <p>{roomsApi.tipo}</p>
                        </div>
                    ))}
                <div className="w3-row-padding w3-section">
                    {
                        roomsApi.imagenes.map((img, i)=>(
                            <div key={i} className="w3-col s3">
                                <img 
                                className={`demo w3-opacity ${i === 0 ? "w3-opacity": ""}"w3-hover-opacity-off" `} 
                                src={img} style={{"width":"100%","cursor":"pointer"}}
                                onClick={()=>imagenCurrent(i+1)}title={roomsApi.tipo}
                                ref={(dot)=>dotsRef.current[i]=dot}/>
                            </div>
                        ))
                    }
    
                </div>
                </div>
                <div className="w3-half"> {/*<!--columna 2 -->*/}
                    <div className="w3-container">
                    <h4><strong>The space</strong></h4>
                    <div className="w3-row w3-large">
                        <div className="w3-col s6">
                            <p><i className="fa fa-fw fa-male"></i> Max people: 4</p>
                            <p><i className="fa fa-fw fa-bath"></i> Bathrooms: 2</p>
                            <p><i className="fa fa-fw fa-bed"></i> Bedrooms: 1</p>
                        </div>
                        <div className="w3-col s6">
                            <p><i className="fa fa-fw fa-clock-o"></i> Check In: After 3PM</p>
                            <p><i className="fa fa-fw fa-clock-o"></i> Check Out: 12PM</p>
                        </div>
                    </div>
                    <hr/>
                    <h4><strong>Amenities</strong></h4>
                    <div className="w3-row w3-large">
                        <div className="w3-col s6">
                            <p><i className="fa fa-fw fa-shower"></i> Shower</p>
                            <p><i className="fa fa-fw fa-wifi"></i> WiFi</p>
                            <p><i className="fa fa-fw fa-tv"></i> TV</p>
                        </div>
                        <div className="w3-col s6">
                            <p><i className="fa fa-fw fa-cutlery"></i> Kitchen</p>
                            <p><i className="fa fa-fw fa-thermometer"></i> Heating</p>
                            <p><i className="fa fa-fw fa-wheelchair"></i> Accessible</p>
                        </div>
                    </div>
                        <hr></hr>
                    </div>
                </div>
                <div className="w3-half"> {/*<!--columna 3 -->*/}
                        <h4><strong>Extra Info</strong></h4>
                        <p>Our apartment is really clean and we like to keep it that way. Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>We accept: <i className="fa fa-credit-card w3-large"></i> <i className="fa fa-cc-mastercard w3-large"></i> <i className="fa fa-cc-amex w3-large"></i> <i className="fa fa-cc-cc-visa w3-large"></i><i className="fa fa-cc-paypal w3-large"></i></p>
                        <hr/>
                        
                        <h4><strong>Rules</strong></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Subscribe to receive updates on available dates and special offers.</p>
                        <p><button className="w3-button w3-green w3-third">Subscribe</button></p>
                </div>
                <div className="w3-half"> {/*<!--columna 4 -->*/}
                        <div className="w3-container" id="contact">
                            <h2>Contact</h2>
                            <i className="fa fa-map-marker" style={{"width":"30px"}}></i> Chicago, US<br/>
                            <i className="fa fa-phone" style={{"width":"30px"}}></i> Phone: +00 151515<br/>
                            <i className="fa fa-envelope" style={{"width":"30px"}}></i> Email: mail@mail.com<br/>
                            <p>Questions? Go ahead, ask them:</p>
                        <form action="/action_page.php" target="_blank">
                            <p><input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/></p>
                            <p><input className="w3-input w3-border" type="text" placeholder="Email" required name="Email"/></p>
                            <p><input className="w3-input w3-border" type="text" placeholder="Message" required name="Message"/></p>
                            <button type="submit" className="w3-button w3-green w3-third">Send a Message</button>
                        </form>
                        </div>
                </div>
            </div>
        </div>
            <Footer/>
        </>
    )
}


