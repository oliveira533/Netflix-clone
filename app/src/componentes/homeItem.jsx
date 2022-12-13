import React from "react";
import './homeItem.css';
import '../index.css'

const ItemHome = (movie) => {
    return(
        <li className="homeItem">
            <div className="ItemContainer">
                <img src="#" className="ItemImg"/>
                <h4 id="name" className="ItemName">{movie.title} Titulo</h4>
                <p id="desc" className="ItemDesc">{movie.desc}desc</p>
            </div>
        </li>
    );
};

export default ItemHome;