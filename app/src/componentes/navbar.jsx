import React from "react";
import './navbar.css';
import search from '../assets/search.png';
import home from '../assets/home.png';
import movie from '../assets/film.png';
import series from '../assets/series.png';
import plus from '../assets/plus.png';
import random from '../assets/random.png';

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="items">
                <img src={search} className="search mg ig"/>
            </div>
            <div className="items">
                <img src={home} className="home mg ig"/> 
            </div>
            <div className="items">
                <img src={movie} className="movie mg ig"/> 
            </div>
            <div className="items">
                <img src={series} className="series mg ig"/>
            </div>
            <div className="items">
                <img src={random} className="random mg ig"/>
            </div>
            <div className="items">
                <img src={plus} className="plus mg ig"/> 
            </div>
        </div>
    )
};

export default NavBar;