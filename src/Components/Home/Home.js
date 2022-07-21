import React from "react";
import "./Home.css";
import Header from "./Header/Header"
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const Home = () =>{
    return(
            <div className="Home">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )

}

export default Home;