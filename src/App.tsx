import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="App" role="main">
      <header className="App-header">
        <h1>Teste</h1>
        <img src={logo} className="App-logo"   alt="react-logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </main>
  );
}

export default App;
