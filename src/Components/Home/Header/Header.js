import React from "react";
import "./Header.css"
import video from "./video.mp4"
const Header = () =>{
    return(
        <div className="HeaderConteiner">
            <video autoplay  muted playsinline className="Video" >
                <source src={video} type='video/mp4;'/>
            </video>
        </div>
    )
}

export default Header;