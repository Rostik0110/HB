import React from "react";
import "./Header.css"
import video from "./video.mp4"
const Header = () =>{
    return(
        <div className="HeaderConteiner">
            <video controls={false}  autoplay loop muted playsinline webkit-playinginline className="Video" >
                <source src={video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
            </video>
        </div>
    )
}

export default Header;