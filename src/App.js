import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className="contador-container">
        <h1>Contador de Cliques</h1>
        <div className="contador-display">
          <h2>{count}</h2>
        </div>
        <button onClick={incrementarContador} className="botao-incrementar">
          Clique aqui
        </button>
      </div>
    </div>
  );
}

export default App;