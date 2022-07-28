import React from "react";
import "./Home.css";
import Header from "./Header/Header"
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const Home = () =>{
    return(
            <div className="Home">
                <div className="preloader">
                    Нажаль ця сторінка відображається тільки на комп’ютері
                </div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )

}

export default Home;