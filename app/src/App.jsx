import { useState } from 'react';
import './App.css';
import NavBar from './componentes/navbar';
import Home from './home.jsx'
import Search from './search.jsx'
import {Link, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Home className="Home"/>
    </div>
  )
}

export default App
