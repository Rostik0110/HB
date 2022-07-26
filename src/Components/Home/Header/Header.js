import React from "react";
import "./Header.css"
import video from "./video.mp4"
const Header = () =>{
    return(
        <div className="HeaderConteiner">
            <video controls={false} autoplay loop muted playsinline webkit-playinginline className="Video" src={video}></video>
        </div>
    )
}

export default Header;