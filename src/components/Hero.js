import React from "react";
import image from '../img/photo-grid.png'

function Hero (){
    return(
        <section className="hero">
            <img src={image} alt="person" className="gridImage"></img>
            <h1 className="hero-header"> Online Experience</h1>
            <p className="hero-text">Join unique interactive activities led by 
                one-of-a-kind host-all without leaving
                home
            </p>
        </section>
    )
}

export default Hero;