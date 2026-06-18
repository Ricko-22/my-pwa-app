import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>My Progressive Web App</h1>
//       <p>Aplikasi React dengan fitur PWA.</p>
//     </div>
//   );
// }

// export default App;