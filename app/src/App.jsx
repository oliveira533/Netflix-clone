import { useState } from 'react';
import './App.css';
import NavBar from './componentes/navbar';
import {Link, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
    </div>
  )
}

export default App
