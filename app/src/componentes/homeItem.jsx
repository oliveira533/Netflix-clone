import React from "react";
import './homeItem.css'

const ItemHome = () => {
    return(
        <div className="ItemContainer">
            <img src="#" className="ItemImg"/>
            <h4 id="name" className="ItemName">Nome</h4>
            <p id="desc" className="ItemDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus cumque dignissimos, modi itaque recusandae eaque!</p>
        </div>
    );
};

export default ItemHome;