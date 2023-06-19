import React from "react";
import logo from '../img/airbnb-logo.png'

function Navbar(){
    return(
        <nav>
            <img src={logo} alt="airbnb logo" className="logo"></img>
        </nav>
    )
}

export default Navbar;