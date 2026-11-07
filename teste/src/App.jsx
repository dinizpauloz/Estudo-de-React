import {useState} from 'react'
import './App.css'

function App() {
  const [Nome, setNome] = useState('')

  return (
    <div className="App">
      <h1>Olá {Nome}</h1>
    <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
    </div>
  )
}

export default App