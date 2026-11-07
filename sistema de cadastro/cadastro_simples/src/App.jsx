import {useState} from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  function cadastrarUsuario() {
    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senha
    };
  
      console.log('Usuário cadastrado:', novoUsuario);
      setUsuarios([...usuarios, novoUsuario]);
    }

  return (
    <div className="body">
      <h1 className="h1">Cadastro de Usuário</h1>
      
      <form onSubmit={(e) => { e.preventDefault(); cadastrarUsuario(); }}>
        
        <div>
          <label className="label">Nome:</label>
          <input className="input" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        
        <div>
          <label className="label">Email:</label>
          <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        <div>
          <label className="label">Senha:</label>
          <input className="input" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
      
        <button className="button" type="submit">Cadastrar</button> 
      </form>
      
      <div>
        <h1>Lista de Usuários</h1>
        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>{usuario.nome} - {usuario.email}</li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default App;