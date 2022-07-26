import React from "react";
import "./Header.css"
import video from "./video.mp4"
const Header = () =>{
    return(
        <div className="HeaderConteiner">
            <video controls={false} autoPlay muted playsinline className="Video" src={video}></video>
        </div>
    )
}

export default Header;