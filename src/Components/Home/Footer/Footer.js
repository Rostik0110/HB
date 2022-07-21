import React from "react";
import "./Footer.css";
import IMG_3 from "./IMG_3.jpg";

const Footer = () =>{
    return(
        <div className="FooterConteiner">
            <div className="CongratulationsTextIT">
                Бажаю простого алгоритму для вирішення будь-яких питань, бажаю чудового веб-дизайну навколишнього світу і відмінного сервісу в особистій програмі.
            </div>
            <img className="Picture" src={IMG_3}/>
            <div className="CongratulationsTextIT">
                Нехай і на просторах програмування, і на дорогах життя завжди чекає щастя і успіх.
            </div>
        </div>
    )
}

export default Footer;