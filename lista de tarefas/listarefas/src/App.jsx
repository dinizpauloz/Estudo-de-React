import {useState} from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(tarefa) {
    setTarefas([...tarefas, tarefa]);
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const tarefa = e.target.elements.tarefa.value;
        adicionarTarefa(tarefa);
        e.target.reset();
      }}>
        <input type="text" name="tarefa" placeholder="Digite uma tarefa" />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
