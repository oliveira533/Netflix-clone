import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import navbar from './componentes/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <navbar/>
    </div>
  )
}

export default App
