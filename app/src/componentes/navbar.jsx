import React from "react";
import './navbar.css'

const NavBar = () => {
    return(
        <div className="navbar">
            <img src="../assets/search.png" className="home mg ig"/> 
            <img src="../assets/home.png" className="home mg ig"/> 
            <img src="../assets/movie.png" className="movie mg ig"/> 
            <img src="../assets/series.png" className="series mg ig"/>
            <img src="../assets/plus.png" className="plus mg ig"/> 
            <img src="../assets/random.png" className="random mg ig"/>
        </div>
    )
}

export default NavBar