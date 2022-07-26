import React from "react";
import "./Home.css";
import Header from "./Header/Header"
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const Home = () =>{
    return(
            <div className="Home">
                <div className="preloader">
                    <p>Нажаль ця сторінка відображвється тільки на комп’ютері</p>
                </div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )

}

export default Home;