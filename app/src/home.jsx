import React from "react";
import './index.css';
import ItemHome from "./componentes/homeItem";

var myHeaders = new Headers();
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var movie = fetch('http://localhost:8081/movies', myInit)
.then(response => response.json())
.then(data => console.log(data))

var teste = [
    {
        id: 1,
        title: 'Acordar',
        desc: 'descrição',
    },
    {
        id: 2,
        title: 'dormir',
        desc: 'descrição',
    },
]

const Home = () =>{
    return(
        <div className="homeContainer align">
            <ul>
                <li>
                    <h3 className="homeTitle">Pra você</h3>
                    <ul className="homeList">
                        {
                        teste.map(movie => <ItemHome movie={movie} key={movie.id} />)
                        }
                    </ul>
                </li>
                <li>
                    <h3 className="homeTitle">Mais assistidos</h3>
                    <ul className="homeList">
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                    </ul>
                </li>
                <li>
                    <h3 className="homeTitle">Comédia</h3>
                    <ul className="homeList">
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                    </ul>
                </li>
                <li>
                    <h3 className="homeTitle">Ação</h3>
                    <ul className="homeList">
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                    </ul>
                </li>
                <li>
                    <h3 className="homeTitle">Suspense</h3>
                    <ul className="homeList">
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                    </ul>
                </li>
                <li>
                    <h3 className="homeTitle">Terror</h3>
                    <ul className="homeList">
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                        <li className="homeItem"><ItemHome/></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Home